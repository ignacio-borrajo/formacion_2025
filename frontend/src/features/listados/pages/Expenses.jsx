import React from "react";
import ExpenseList from "../components/ExpenseList";
import {Box,Typography} from "@mui/material";

const Expenses = () => {
  const handleSearch = (searchTerm) => {
    // Aquí puedes manejar la búsqueda, por ejemplo, filtrando los gastos
  };

  return (
    <Box sx={{
          margin: 3
        }}>
      <Typography variant="h1">GASTOS</Typography>
      <ExpenseList onSearch={handleSearch} />
    </Box>
  );
};

export default Expenses;
