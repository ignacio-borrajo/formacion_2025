import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateExpense = () => {
  const [description, setDescription] = useState('');
  const [limit, setLimit] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('FOOD');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    // Asegúrate de que la fecha esté en formato ISO
    const formattedDate = new Date(date).toISOString();

    const expenseData = {
      description,
      limit,
      date: formattedDate, // Aquí asignamos la fecha formateada
      category,
    };

    try {
      const response = await axios.post(
        'http://localhost:8000/expenses/create/', // URL correcta
        expenseData,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log('Gasto creado:', response.data);
      setSuccessMessage('Gasto creado con éxito!');
      setDescription('');
      setLimit('');
      setDate('');
      setCategory('FOOD');
    } catch (err) {
      console.error('Error al crear gasto:', err.response?.data);
      setError('Hubo un problema al crear el gasto. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const goToExpenseList = () => {
    navigate('/showexpenses');
  };

  return (
    <div>
      <h2>Crear Gasto</h2>
      {successMessage && <div className="success">{successMessage}</div>}
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="limit">Límite:</label>
          <input
            type="number"
            id="limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="category">Categoría:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="FOOD">Comida</option>
            <option value="TRAN">Transporte</option>
            <option value="ENTR">Entretenimiento</option>
            <option value="UTIL">Utilidades</option>
            <option value="OTHR">Otros</option>
          </select>
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Creando...' : 'Crear Gasto'}
          </button>
        </div>
      </form>

      {/* Botón para ir a la lista de gastos */}
      <div>
        <button onClick={goToExpenseList}>Ver Lista de Gastos</button>
      </div>
    </div>
  );
};

export default CreateExpense;
