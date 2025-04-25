import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowExpenses.css'; // Importamos el archivo CSS

const ShowExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/expenses/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`, // Usa el token guardado en localStorage
          },
        });
        setExpenses(response.data);
      } catch (err) {
        console.error('Error al obtener los gastos:', err);
        setError('Hubo un problema al obtener los gastos.');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []); // Esto se ejecuta cuando el componente se monta

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="expenses-container">
      <h2>Lista de Gastos</h2>
      {expenses.length > 0 ? (
        <ul className="expenses-list">
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              <p><strong>Descripción:</strong> {expense.description}</p>
              <p><strong>Límite:</strong> {expense.limit}</p>
              <p><strong>Fecha:</strong> {expense.date}</p>
              <p><strong>Categoría:</strong> {expense.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay gastos registrados.</p>
      )}
    </div>
  );
};

export default ShowExpenses;
