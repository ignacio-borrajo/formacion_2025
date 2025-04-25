import { Grid, Typography } from "@mui/material";
import React from "react";
import useFetchExpenses from "../hooks/useFetchExpense";
import ItemList from "./ItemList";

const ExpenseList = () => {
  const { response: expenses, error, loading } = useFetchExpenses();

  if (loading) {
    return <Typography>Cargando gastos...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error al cargar los gastos.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {expenses?.map((expense) => (
        <ItemList key={expense.id} dato={expense} />
      ))}
    </Grid>
  );
};

export default ExpenseList;