import React from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";  // Estilos opcionales

const Menu = () => {
  const navigate = useNavigate();

  // Función para redirigir a la página de expenses
  const goToExpenses = () => {
    navigate("/expenses");
  };

  // Función para redirigir a la página de creación de líneas de gasto (Lin.jsx)
  const goToLinesExpenses = () => {
    navigate("/expenses/:expenseId/lines/create");  // Aquí la ruta correcta para Lin.jsx
  };

  return (
    <div className="menu-container">
      <h2>Bienvenido al MENU</h2>
      <div>
        {/* Botón para ir a la página de expenses */}
        <button onClick={goToExpenses}>Expenses</button>
      </div>
      <div>
        {/* Botón para ir a la página de creación de líneas de gasto */}
        <button onClick={goToLinesExpenses}>Line Expenses</button>
      </div>
    </div>
  );
};

export default Menu;
