import React from "react";
import AddExpensesForm from "../components/AddExpensesForm";
import Typography from "@mui/material/Typography";

const AddExpenses = () => {
  return (
    <div>
      <Typography variant="h1">Añadir gasto</Typography>
      <AddExpensesForm />
    </div>
  );
};

export default AddExpenses;
