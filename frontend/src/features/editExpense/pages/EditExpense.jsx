import React from "react";
import EditExpenseForm from "../components/EditExpenseForm";
import {Typography,Box} from "@mui/material";

const EditExpense = () => {
  return (
    <Box>
      <Typography variant="h1">Editar Gasto</Typography>
      <EditExpenseForm />
    </Box>
  );
};

export default EditExpense;
