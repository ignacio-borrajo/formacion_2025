import React from "react";
import ItemList from "./ItemList";
import useFetchExpenses from "../hooks/useFetchExpense";
import { Card, CardContent, Typography, TextField, Button, Grid } from "@mui/material";

const ExpenseList = ({ onSearch = () => { } }) => {
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
    <Typography variant="h4" color="error">
      Se ha producido un error
    </Typography>
  ) : loading ? (
    <Typography variant="h4">Cargando...</Typography>
  ) : (

    <div className="listado-gastos" >
      <Grid container spacing={2} alignItems="center" marginBottom={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Buscar"
            variant="outlined"
            value={inputValue}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={handleClick} fullWidth>
            Buscar
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column' }}>
        {expenses?.map((dato) => (
          <ItemList key={dato.id} dato={dato} />
        ))}
      </Grid>
    </div>
  );
};

export default ExpenseList;
