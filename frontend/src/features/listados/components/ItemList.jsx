import React from "react";

const ItemList = ({ dato, search }) => {
  const [expense, setExpense] = React.useState();

  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);

  return expense ? (
    <div>
      <h2>
        <a href="lines/{dato.id}/">{expense.description}</a>
      </h2>
      <p>Límite: {expense.limit}</p>
      <p>Categoría: {expense.category}</p>
      <p>Total Gastos: {expense.total}</p>
      <p>Fecha: {expense.date}</p>
    </div>
  ) : (
    "Loading"
  );
};

export default ItemList;
