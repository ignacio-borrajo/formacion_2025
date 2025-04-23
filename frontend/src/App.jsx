import './App.css'
import NavBar from './features/listados/components/Navbar';
import Expenses from './features/listados/pages/Expenses';
import Logout from './features/users/components/Logout';
import Login from './features/users/pages/Login';
import { useEffect, useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  const [getToken,setGetToken] = useState("")
  useEffect(()=>{
      setGetToken(sessionStorage.getItem('token'))
      console.log(getToken)
  },[sessionStorage.getItem('token')])
  return (
    <>
    <Router>
      <div>
        <NavBar getToken={getToken}/>
        <Routes>
          <Route path="/" element={<Expenses/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/gastos" element={<Expenses/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App