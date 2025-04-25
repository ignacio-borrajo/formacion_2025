import React, { useEffect } from "react";
import api from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const EditLineForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [expense, setExpense] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [error, setError] = React.useState(null);


  useEffect(() => {
    api
      .get(`lines/${id}/`)
      .then(response => {
        const { expense, description, amount, date, tag } = response.data;
        setExpense(expense);
        setDescription(description);
        setAmount(amount);
        setDate(date);
        setTag(tag);
      })
      .catch(error => {
        console.error("Error fetching line:", error);
        setError("No se pudo cargar la línea.");
      });
  }, [id]);

  const handleClick = () => {
    setError(null);
    api
      .put(`lines/${id}/`, {
        expense,
        description,
        amount,
        date,
        //tag,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("EditLine error:", error);
        setError("No se pudo actualizar la línea. Intenta de nuevo.");
      });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        id="description"
        label="Descripción"
        variant="standard"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        id="amount"
        label="Cantidad (ex. 50.00)"
        type="number"
        variant="standard"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        id="date"
        label="Fecha (ex. 2025-04-22)"
        type="standard"
        variant="standard"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <FormControl variant="standard">
        <InputLabel id="tag-label">Etiqueta</InputLabel>
        <Select
          labelId="tag-label"
          id="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        >
          <MenuItem value="food">Comida</MenuItem>
          <MenuItem value="transport">Transporte</MenuItem>
          <MenuItem value="entertainment">Entretenimiento</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleClick}>
        Guardar cambios
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default EditLineForm;
