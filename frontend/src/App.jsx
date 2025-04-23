import './App.css'
import Expenses from './features/listados/pages/Expenses';
import Login from './features/users/pages/Login';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/gastos">Gastos</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Expenses/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/gastos" element={<Expenses/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App