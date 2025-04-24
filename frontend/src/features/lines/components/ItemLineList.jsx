import React from "react";
import {Box,Typography} from "@mui/material";

const ItemList = ({ dato }) => {
  const [expense, setExpense] = React.useState();

  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);

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
    </Box>
  ) : (
    "Loading"
  );
};

export default ItemList;
