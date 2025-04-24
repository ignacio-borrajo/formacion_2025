import React from "react";
import ItemList from "./ItemList";
import useFetchExpenses from "../hooks/useFetchExpense";
import { Typography, Box, TextField, Button } from "@mui/material";

const ExpenseList = ({ onSearch = () => {} }) => {
  const [expenses, setExpenses] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const { response, error, loading } = useFetchExpenses();

  React.useEffect(() => {
    if (response) {
      setExpenses(response);
    }
  }, [response]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    onSearch(inputValue);
  };

  return error ? (
    <Typography variant="h4">Se ha producido un error</Typography>
  ) : loading ? (
    <Typography variant="h4">Cargando...</Typography>
  ) : (
    <Box className="listado-lineas" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextField variant="standard" type="text" placeholder="Buscar" value={inputValue} onChange={handleChange} />
      <Button variant="contained" onClick={handleClick}>Buscar</Button>
      {expenses?.map((dato) => {
        return <ItemList key={dato.id} dato={dato} search={inputValue} />;
      })}
    </Box>
  );
};

export default ExpenseList;
