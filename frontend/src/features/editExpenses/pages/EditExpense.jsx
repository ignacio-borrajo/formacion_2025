import React from "react";
import EditExpenseForm from "../components/EditExpenseForm";
import Typography from "@mui/material/Typography";


const EditExpense = () => {
  return (
    <div>
      <Typography variant="h1">Editar gasto</Typography>
      <EditExpenseForm />
    </div>
  );
};

export default EditExpense;
