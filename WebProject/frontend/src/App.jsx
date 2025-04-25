import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";  // Asegúrate de importar Register
import Login from "./Login";  // Asegúrate de importar Login
import Menu from "./Menu";  // Asegúrate de importar Menu
import Expenses from './Expenses';
import ShowExpenses from './ShowExpenses';
import Lin from './Lin'; // Importa el componente Lin

function App() {
  return (
    <Router>
      <Routes>
        {/* Aquí se cambia el Home por Register, así Register es la página principal */}
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/showexpenses" element={<ShowExpenses />} />
        <Route path="/expenses/:expenseId/lines/create" element={<Lin />} /> {/* Esta es la ruta para Lin.jsx */}


      </Routes>
    </Router>
  );
}

export default App;
