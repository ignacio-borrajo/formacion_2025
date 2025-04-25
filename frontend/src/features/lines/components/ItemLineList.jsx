import React from "react";
import {Box,Typography, Button} from "@mui/material";
import api from "../../../api/api";
import { useNavigate} from "react-router-dom";

const ItemList = ({ dato }) => {
  const [expense, setExpense] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);

  const handleClick = () => {
    api
    .delete("lines/"+expense.id+"/")
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Delete error:", error);
      setError("Fallo al eliminar");
    });
    window.location.reload();
  };
  const handleClickEdit = () => {
    navigate("/editLine/"+ expense.id);
  };

  return expense ? (
    <Box  sx={{
      margin: 3
    }}>
      <Typography variant="h3">
        {expense.description}
      </Typography>
      <Typography>ID: {expense.id}</Typography>
      <Typography>Cantidad: {expense.amount}</Typography>
      <Typography>Fecha: {expense.date}</Typography>
      <Typography >Tag:
      {(
        expense.tag.map((tag, index) => (
           <span key={index}>{tag.name}, </span>
        )))}
        </Typography>
        <Button variant="contained" onClick={handleClick}>BORRAR</Button>
        <Button variant="contained" onClick={handleClickEdit}>EDITAR</Button>
    </Box>
  ) : (
    "Loading"
  );
};

export default ItemList;
