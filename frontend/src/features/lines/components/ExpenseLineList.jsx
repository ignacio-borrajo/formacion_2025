import React from "react";
import ItemList from "./ItemLineList";
import useFetchExpenses from "../hooks/useFetchExpense";
import {Box, TextField, Button} from "@mui/material";
import { useSearchParams } from 'react-router-dom';

const ExpenseList = ({ onSearch = () => {} }) => {
  const [expenses, setExpenses] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [searchParams] = useSearchParams();

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

  return (
    <Box className="listado-gastos"sx={{
        display:"flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <Box sx={{display:"flex"}}>
        <TextField id="search" label="Buscar" defaultValue={searchParams.get('tag')} variant="filled" onChange={handleChange} sx={{marginRight: 1}}/>
        <Button variant="contained" onClick={handleClick}>Buscar</Button>
      </Box>
      {expenses?.map((dato) => {
        return <ItemList key={dato.id} dato={dato} search={inputValue} />;
      })}
    </Box>
  );
};

export default ExpenseList;
