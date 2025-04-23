import { useState } from "react";
import "./App.css";
import Expenses from "./features/listados/pages/Expenses";
import Login from "./features/users/pages/Login";
import {BrowserRouter as Router ,Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Expenses/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/gastos" element={<Expenses/>} />
      </Routes>
    </Router>
  );
}

export default App;