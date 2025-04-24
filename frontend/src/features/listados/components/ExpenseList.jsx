import React from "react";
import ItemList from "./ItemList";
import useFetchExpenses from "../hooks/useFetchExpense";
import {Typography, Box, TextField, Button} from "@mui/material";

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
    <Box className="listado-gastos"sx={{
        display:"flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <Box sx={{display:"flex"}}>
        <TextField id="search" label="Buscar" variant="filled" value={inputValue} onChange={handleChange}  sx={{marginRight: 1}}/>
        <Button variant="contained" onClick={handleClick}>Buscar</Button>
      </Box>
      {expenses?.map((dato) => {
        return <ItemList key={dato.id} dato={dato} search={inputValue} />;
      })}
    </Box>
  );
};

export default ExpenseList;
