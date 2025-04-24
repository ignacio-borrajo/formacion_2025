import './App.css'
import Expenses from './features/listados/pages/Expenses'
import Login from './features/users/pages/Login'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './common/components/layout'
import Home from './features/home/pages/Home'


function App() {
  



  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/expenses' element={<Expenses/>}/>
        </Route>
        
        


      </Routes>
    
    </BrowserRouter>
  )
}

export default App
