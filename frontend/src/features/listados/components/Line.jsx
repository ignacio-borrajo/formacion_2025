import React from "react";
import LineTag from "../components/LineTag";

const Line = ({ dato, search }) => {
  const [line, setLine] = React.useState();

  React.useEffect(() => {
    setLine(dato);
  }, [dato]);

  return line ? (
    <div>
      <h2>{line.description}</h2>
      <p>Cantidad: {line.amount}</p>
      <p>Fecha: {line.date}</p>
      <div style={{ marginTop: "10px" }}>
        <p>Tags:</p>
        {line.tags?.length > 0 ? (
          line.tags.map(tag => (
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
