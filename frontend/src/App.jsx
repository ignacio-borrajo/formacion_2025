import "./App.css";
import Expenses from "./features/listados/pages/Expenses";
import Lineas from "./features/listados/pages/Lineas";
import Editar from "./features/listados/pages/Editar";
import Login from "./features/users/pages/Login";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Layout from "./common/components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" exact element={<Expenses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gastos/:expenseid" element={<Lineas/>} />
          <Route path="/editar/:expenseid" element={<Editar/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;