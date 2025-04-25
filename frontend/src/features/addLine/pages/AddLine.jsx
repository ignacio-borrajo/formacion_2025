import React from "react";
import AddLineForm from "../components/AddLineForm";
import {Typography,Box} from "@mui/material";

const AddLine = () => {
  return (
    <Box>
      <Typography variant="h1">Crear Línea Gasto</Typography>
      <AddLineForm />
    </Box>
  );
};

export default AddLine;
