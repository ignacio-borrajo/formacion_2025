import React from "react";
import api from "../../../api/api";
import { useNavigate, useLocation } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddLineForm = () => {
  const navigate = useNavigate();

  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [error, setError] = React.useState(null);

  const location = useLocation();

  const handleClick = () => {
    setError(null);
    const expenseId = new URLSearchParams(location.search).get("idExpense");
    api
      .post("lines/", {
        expense: expenseId,
        description,
        amount,
        date:"2025-04-22T02:00:00+02:00",
        // tag,
      })
      .then((response) => {
        sessionStorage.setItem("access", response.data.access);
        sessionStorage.setItem("refresh", response.data.refresh);
        navigate("/");
      })
      .catch((error) => {
        console.error("AddLine error:", error);
        setError("The line cannot be added. Please try again.");
      });
  };

  const handleChange = (event) => {
    setTag(event.target.value);
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
      <TextField
        id="amount"
        label="Cantidad (ex. 50.00)"
        type="number"
        variant="standard"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <TextField
        id="date"
        label="Fecha (ex. 2023-01-01)"
        type="date"
        variant="standard"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <FormControl fullWidth>
        <InputLabel id="tag">Tag</InputLabel>
        <Select
          labelId="tagLbl"
          id="tag"
          value={tag}
          label="tag"
          onChange={handleChange}
        >
          <MenuItem value={"FOOD"}>Comida</MenuItem>
          <MenuItem value={"TRAN"}>Transporte</MenuItem>
          <MenuItem value={"ENTR"}>Entretenimiento</MenuItem>
          <MenuItem value={"UTIL"}>Utilidades</MenuItem>
          <MenuItem value={"OTHR"}>Otros</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleClick}>
        Añadir línea
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default AddLineForm;
