import React from "react";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddExpensesForm = () => {
  const navigate = useNavigate();

  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [limit, setLimit] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleClick = () => {
    setError(null);
    api
      .post("gastos/", {
        description,
        category,
        limit,
      })
      .then((response) => {
        sessionStorage.setItem("access", response.data.access);
        sessionStorage.setItem("refresh", response.data.refresh);
        navigate("/");
      })
      .catch((error) => {
        console.error("AddExpense error:", error);
        setError("The expense cannot be added. Please try again.");
      });
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        id="description"
        label="Descripción"
        variant="standard"
        type="standard"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <FormControl fullWidth>
        <InputLabel id="category">Categoría</InputLabel>
        <Select
          labelId="categoryLbl"
          id="category"
          value={category}
          label="category"
          onChange={handleChange}
        >
          <MenuItem value={"FOOD"}>Comida</MenuItem>
          <MenuItem value={"TRAN"}>Transporte</MenuItem>
          <MenuItem value={"ENTR"}>Entretenimiento</MenuItem>
          <MenuItem value={"UTIL"}>Utilidades</MenuItem>
          <MenuItem value={"OTHR"}>Otros</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="limit"
        label="Límite (ex. 50.00)"
        type="number"
        variant="standard"
        value={limit}
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handleClick}>
        Añadir gasto
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default AddExpensesForm;
