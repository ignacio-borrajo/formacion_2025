import React from "react";
import ExpenseList from "../components/ExpenseLineList";
import {Box,Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Expenses = () => {
  const handleSearch = (searchTerm) => {
    window.location.href = window.location.href.split('&')[0]+"&tag="+searchTerm
  };

  return (
    <Box sx={{
          margin: 3
        }}>
      <Typography variant="h1">Lineas</Typography>
      <ExpenseList onSearch={handleSearch} />
    </Box>
  );
};

export default Expenses;
