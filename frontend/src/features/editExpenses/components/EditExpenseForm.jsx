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

const EditExpenseForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [limit, setLimit] = React.useState("");
  const [error, setError] = React.useState(null);

  useEffect(() => {
    api
      .get(`gastos/${id}/`)
      .then(response => {
        const { description, category, limit } = response.data;
        setDescription(description);
        setCategory(category);
        setLimit(limit);
      })
      .catch(error => {
        console.error("Error fetching expense:", error);
        setError("No se pudo cargar el gasto.");
      });
  }, [id]);

  const handleClick = () => {
    setError(null);
    api
      .put(`gastos/${id}/`, {
        description,
        category,
        limit,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("EditExpense error:", error);
        setError("No se pudo actualizar el gasto. Intenta de nuevo.");
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
      <FormControl fullWidth>
        <InputLabel id="category">Categoría</InputLabel>
        <Select
          labelId="category"
          id="category"
          value={category}
          label="Categoría"
          onChange={(e) => setCategory(e.target.value)}
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
        onChange={(e) => setLimit(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>
        Guardar cambios
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default EditExpenseForm;
