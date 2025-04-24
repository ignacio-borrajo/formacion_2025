import React from "react";
import LoginForm from "../components/LoginForm";
import {Typography,Box} from "@mui/material";

const Login = () => {
  return (
    <Box>
      <Typography variant="h1">Login</Typography>
      <LoginForm />
    </Box>
  );
};

export default Login;
