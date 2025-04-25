import React from "react";
import {Box,Button,Typography} from "@mui/material";
import api from "../../../api/api";
import { useNavigate} from "react-router-dom";

const ItemList = ({ dato, search }) => {
  const [expense, setExpense] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);

  const handleClick = () => {
      api
      .delete("gastos/"+expense.id+"/")
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
    navigate("/edit/"+ expense.id);
  };
  return expense ? (
    <Box  sx={{
      margin: 3
    }}>
      <Typography variant="h3">
        <a href={"lines/?expense="+expense.id}>{expense.description}</a>
      </Typography>
      <Typography>Límite: {expense.limit}</Typography>
      <Typography>Categoría: {expense.category}</Typography>
      <Typography>Total Gastos: {expense.total}</Typography>
      <Typography>Fecha: {expense.date}</Typography>
      <Button variant="contained" onClick={handleClick}>BORRAR</Button>
      <Button variant="contained" onClick={handleClickEdit}>EDITAR</Button>
    </Box>
  ) : (
    "Loading"
  );
};

export default ItemList;
