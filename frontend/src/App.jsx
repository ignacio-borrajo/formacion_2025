import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expenses from './features/listados/pages/Expenses'
import Login from './features/users/components/login'

import { BrowserRouter, Route,  Routes } from 'react-router-dom'

import Layout from './common/components/layout'


function App() {
  



  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='#' element={<Expenses/>}/>
         <Route path='/' element={<Expenses/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
        
        


      </Routes>
    
    </BrowserRouter>
  )
}

export default App
