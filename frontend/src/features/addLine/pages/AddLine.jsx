import React from "react";
import AddLineForm from "../components/AddLineForm";
import Typography from "@mui/material/Typography";

const AddLine = () => {
  return (
    <div>
      <Typography variant="h1">Añadir línea</Typography>
      <AddLineForm />
    </div>
  );
};

export default AddLine;
