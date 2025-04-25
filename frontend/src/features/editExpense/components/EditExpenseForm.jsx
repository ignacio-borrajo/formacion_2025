import React,{useEffect} from "react";
import api from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const EditExpenseForm = () => {
  const navigate = useNavigate();

  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [limit, setLimit] = React.useState("");
  const user = sessionStorage.getItem("user");
  const [error, setError] = React.useState(null);
  const {id} = useParams();

  useEffect(() => {
    api
    .get("gastos/"+id+"/")
    .then((response) => {
      const{description, category,limit} = response.data;
      setDescription(description);
      setCategory(category);
      setLimit(limit);
      console.log(description+category+limit);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setError(error);
    });
  },[id])

  const handleClick = () => {  
    setError(null);
    api
      .put("gastos/"+id+"/", {
        description,
        category,
        limit,
      }).then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Edit error:", error);
        setError("Fallo de Edicion");
      });
  };

  const handleChange = (event) => {
    setCategory(event.target.value );
  };


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
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <FormControl>
      <InputLabel id="category">Categoría</InputLabel>
        <Select
          labelId="categoryLbl"
          id="category"
          value={category}
          label="Categoria"
          onChange={handleChange}
        >
          <MenuItem value={"FOOD"}>COMIDA</MenuItem>
          <MenuItem value={"TRAN"}>TRANSPORTE</MenuItem>
          <MenuItem value={"ENTR"}>ENTRETENIMIENTO</MenuItem>
          <MenuItem value={"UTIL"}>UTILIDADES</MenuItem>
          <MenuItem value={"OTHR"}>OTROS</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="limit"
        label="Limite"
        variant="standard"
        type="number"
        value={limit}
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handleClick}>
        Guardar
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default EditExpenseForm;
