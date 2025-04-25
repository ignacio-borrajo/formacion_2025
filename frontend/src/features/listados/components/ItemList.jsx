import React from "react";
import { Box, Typography } from "@mui/material";
 
const ItemList = ({ dato, search }) => {
  const [expense, setExpense] = React.useState();
 
  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);
 
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
    </Box>
  ) : (
    "Loading"
  );
};
 
export default ItemList;