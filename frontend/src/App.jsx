import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./common/components/Layout";
import Expenses from "./features/listados/pages/Expenses";
import ExpensesLins from "./features/listados/pages/ExpensesLins";
import Login from "./features/users/pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" exact element={<Expenses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gastos" element={<Expenses />} />
          <Route path="/lines/:expenseId" element={<ExpensesLins />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
