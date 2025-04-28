import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./common/components/Layout";
import Expenses from "./features/listados/pages/Expenses";
import Lines from "./features/listados/pages/Lines";
import Login from "./features/users/pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" exact element={<Expenses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gastos" element={<Expenses />} />
          <Route path="/gastos/:id/lineas" element={<Lines />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
