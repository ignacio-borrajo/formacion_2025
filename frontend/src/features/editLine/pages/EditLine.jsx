import React from "react";
import EditLineForm from "../components/EditLineForm";
import {Typography,Box} from "@mui/material";

const EditLine = () => {
  return (
    <Box>
      <Typography variant="h1">Editar Gasto</Typography>
      <EditLineForm />
    </Box>
  );
};

export default EditLine;
