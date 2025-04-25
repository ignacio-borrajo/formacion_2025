import React from "react";
import AddExpenseForm from "../components/AddExpenseForm";
import {Typography,Box} from "@mui/material";

const AddExpense = () => {
  return (
    <Box>
      <Typography variant="h1">Crear Gasto</Typography>
      <AddExpenseForm />
    </Box>
  );
};

export default AddExpense;
