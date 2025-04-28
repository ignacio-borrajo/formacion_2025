import React from "react";
import LineTag from "../components/LineTag";

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
      <div style={{ marginTop: "10px" }}>
        <p>Tags:</p>
        {expense.tags?.length > 0 ? (
          expense.tags.map(tag => (
            <LineTag key={tag.id} tag={tag} />
          ))
        ) : (
          <p>No tiene etiquetas</p>
        )}
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default Line;
