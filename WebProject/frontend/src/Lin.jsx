import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Lin = () => {
  const { expenseId } = useParams(); // Capturamos el ID del gasto de la URL
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState([]); // Etiquetas
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Para redirigir después de un POST exitoso

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const expenseLineData = {
      description,
      amount,
      date,
      tags: tags, // Asegúrate de que las etiquetas estén bien formateadas
    };

    try {
      // Realizamos la solicitud POST para crear una nueva línea de gasto
      const response = await axios.post(
        `http://localhost:8000/expenses/${expenseId}/lines/`, // Ruta para crear la línea de gasto
        expenseLineData,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`, // Usamos el token para autenticación
          },
        }
      );

      console.log('Línea de gasto creada:', response.data);
      setSuccessMessage('Línea de gasto creada con éxito!');
      
      // Limpiar los campos del formulario
      setDescription('');
      setAmount('');
      setDate('');
      setTags([]);
    } catch (err) {
      console.error('Error al crear la línea de gasto:', err.response ? err.response.data : err.message);
      setError('Hubo un problema al crear la línea de gasto. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Crear Línea de Gasto para Gasto ID: {expenseId}</h2>

      {/* Mostrar mensajes de éxito o error */}
      {successMessage && <div className="success">{successMessage}</div>}
      {error && <div className="error">{error}</div>}

      {/* Formulario de creación de línea de gasto */}
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
          <label htmlFor="amount">Monto:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
          <label htmlFor="tags">Etiquetas (separadas por comas):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value.split(','))}
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Creando...' : 'Crear Línea de Gasto'}
          </button>
        </div>
      </form>

      {/* Botón para redirigir a la lista de líneas de gasto */}
      <div>
        <button onClick={() => navigate(`/expenses/${expenseId}/lines`)}>Ver Líneas de Gasto</button>
      </div>
    </div>
  );
};

export default Lin;
