import React, { use } from "react";
import ItemList from "./ItemList";
import useFetchExpenses from "../hooks/useFetchExpense";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";


const ExpenseList = ({ onSearch = () => {} }) => {
  const [expenses, setExpenses] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const queryParams = new URLSearchParams(location.search);
  const expenseId = queryParams.get("expense");
  console.log("ID", expenseId);
  const navigate = useNavigate();

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
    const filteredLines = response.filter((expense) =>
      expense.tag?.some((tag) =>
        tag.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
    setExpenses(filteredLines);
  };  

  const handleClickAdd = () => {
    navigate(`/addLine/?idExpense=${expenseId}`);
  };

  return error ? (
    <Typography variant="h4">Se ha producido un error</Typography>
  ) : loading ? (
    <Typography variant="h4">Cargando...</Typography>
  ) : (
    <Box className="listado-lineas" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextField variant="standard" type="text" placeholder="Buscar" value={inputValue} onChange={handleChange} />
      <Button variant="contained" onClick={handleClick}>Buscar</Button>
      <Button variant="contained" onClick={handleClickAdd}>Añadir Línea</Button>
      {expenses?.map((dato) => {
        return <ItemList key={dato.id} dato={dato} search={inputValue} />;
      })}
    </Box>
  );
};

export default ExpenseList;
