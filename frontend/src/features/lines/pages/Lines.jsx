import React from "react";
import ExpenseList from "../components/ExpenseList";
import { Typography } from "@mui/material";

const Expenses = () => {
  const handleSearch = (searchTerm) => {
    // Aquí puedes manejar la búsqueda, por ejemplo, filtrando los gastos
  };

  return (
    <>
      <Typography variant="h1">LÍNEAS</Typography>
      <ExpenseList onSearch={handleSearch} />
    </>
  );
};

export default Expenses;
