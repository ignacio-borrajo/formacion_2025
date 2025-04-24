import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <Box className="layout">
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;