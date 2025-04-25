import React from "react";
import { format } from "date-fns";
import useFetchExpenses from "../hooks/useFetchExpense";
import { Card, CardContent, Typography, Grid, TextField, Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExpenseList = ({ onSearch = () => {} }) => {
  const [expenses, setExpenses] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const { response, error, loading } = useFetchExpenses();

 
  const navigate = useNavigate();
  
  const handleViewLines = (expenseId) => {
    navigate(`/lines/${expenseId}`);
  };

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
    <div>
      <TextField
        label="Buscar"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        style={{ marginBottom: "1rem" }}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Buscar
      </Button>
      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        {expenses?.map((dato) => (
          <Grid item xs={12} sm={6} md={4} key={`expense-${dato.id}`}>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)")}
          >
            <CardContent>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                {dato.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Categoría: {dato.category}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Límite: {dato.limit}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Fecha: {format(new Date(dato.date), "dd/MM/yyyy")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleViewLines(dato.id)}>
                Ver detalles
              </Button>
            </CardActions>
          </Card>
        </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ExpenseList;
