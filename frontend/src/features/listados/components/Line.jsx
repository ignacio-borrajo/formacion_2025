import React from "react";

const Line = ({ dato, search }) => {
  const [expense, setExpense] = React.useState();

  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);

  return expense ? (
    <div>
      <h2>{expense.description}</h2>
      <p>Cantidad: {expense.amount}</p>
      <p>Fecha: {expense.date}</p>
    </div>
  ) : (
    "Loading"
  );
};

export default Line;
