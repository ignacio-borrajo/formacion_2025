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
      .delete("lines/" + expense.id + "/") 
      .then((response) => {
        sessionStorage.setItem("access", response.data.access);
        sessionStorage.setItem("refresh", response.data.refresh);
        window.location.reload();
      })
      .catch((error) => {
        console.error("DeleteLine error:", error);
        setError("El gasto no se puede eliminar. Por favor, inténtelo de nuevo.");
      });
  };
  
  const handleClickEdit = () => {
    setError(null);
    navigate("/editLine/" + expense.id);
  }
 
  return expense ? (
    <Box  sx={{
      margin: 2
    }}>
      <Typography variant="h3">
        {expense.description}
      </Typography>
      <Typography>Cantidad: {expense.amount}</Typography>
      <Typography>Fecha: {expense.date}</Typography>
      <Typography>Tag: 
        {(
          expense.tag.map((tag, index) => (
          <span key={index}> {tag.name},</span>
        )))}
      </Typography>
      <Button variant="contained" onClick={handleClickEdit} sx={{ marginRight: 1 }}>
        Editar
      </Button>
      <Button variant="contained" onClick={handleClick}>
        Borrar
      </Button>
    </Box>
  ) : (
    "Loading"
  );
};
 
export default ItemList;