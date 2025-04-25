import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
 
const ItemList = ({ dato, search }) => {
  const [expense, setExpense] = React.useState();
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
 
  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);
 
  const handleClick = () => {
    setError(null);
    api
      .delete("gastos/" + expense.id + "/") 
      .then((response) => {
        sessionStorage.setItem("access", response.data.access);
        sessionStorage.setItem("refresh", response.data.refresh);
        window.location.reload();
      })
      .catch((error) => {
        console.error("AddExpense error:", error);
        setError("El gasto no se puede eliminar. Por favor, inténtelo de nuevo.");
      });
  };

  const handleClickEdit = () => {
    setError(null);
    navigate("/editExpense/" + expense.id);
  }

  return expense ? (
    <Box  sx={{
      margin: 2
    }}>
      <Typography variant="h3">
        <a href={`lines/?expense=${expense.id}`}>{expense.description}</a>
      </Typography>
      <Typography>Límite: {expense.limit}</Typography>
      <Typography>Categoría: {expense.category}</Typography>
      <Typography>Total Gastos: {expense.total}</Typography>
      <Typography>Fecha: {expense.date}</Typography>
      <Button variant="contained" onClick={handleClickEdit} sx={{ marginRight: 1 }}>
        Editar
      </Button>
      <Button variant="contained" onClick={handleClick}>
        Borrar
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  ) : (
    "Loading"
  );
};
 
export default ItemList;