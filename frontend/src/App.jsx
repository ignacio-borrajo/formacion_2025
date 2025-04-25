import { useState } from "react";
import "./App.css";
import Expenses from "./features/listados/pages/Expenses";
import Login from "./features/users/pages/Login";
import Lines from "./features/listados/pages/Lines"; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Layout from "./common/components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" exact element={<Expenses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gastos" element={<Expenses />} />
          <Route path="/lines/:expenseId" element={<Lines />} /> 
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
