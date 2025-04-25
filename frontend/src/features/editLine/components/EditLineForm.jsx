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

const EditLineForm = () => {
  const navigate = useNavigate();

  const [description, setDescription] = React.useState("");
  const [expense, setExpense] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [error, setError] = React.useState(null);
  const {id} = useParams();
  const currentDate = new Date().toISOString();

  useEffect(() => {
    api
    .get("lines/"+id+"/")
    .then((response) => {
      const{description, expense,amount} = response.data;
      setDescription(description);
      setExpense(expense);
      setAmount(amount);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setError(error);
    });
  },[id])

  const handleClick = () => {  
    setError(null);
    api
      .put("lines/"+id+"/", {
        expense,
        description,
        amount,
        date: currentDate,
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
        id="expense"
        label="ID Gasto Padre"
        variant="standard"
        value={expense}
        onChange={(e) => {
          setExpense(e.target.value);
        }}
      />
      <TextField
        id="description"
        label="Descripción"
        variant="standard"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <TextField
        id="amount"
        label="Cantidad"
        variant="standard"
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handleClick}>
        Guardar
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default EditLineForm;
