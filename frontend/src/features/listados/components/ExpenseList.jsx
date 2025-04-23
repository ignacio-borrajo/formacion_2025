import { useState } from 'react';
import ItemList from './itemList';
import useFetchExpense from '../hooks/useFetchExpense'

function ExpenseList() {
  const datos = [
    {
      id: 1, 
      description: 'Sample Data',
      limit:100,
      category:"FOOD",
      total:45.3,
      date:"2025-04-22T12:02:00Z"
    },
    {
      id: 2, 
      description: 'Sample',
      limit:17,
      category:"FOOD",
      total:46.3,
      date:"2025-04-22T12:02:00Z"
    },
  ]
  const {response,error,loading}=useFetchExpense
  console.log(response)
  return error?<h4>Se ha producido un error</h4>:loading? <h4>Cargando...</h4> :(
    <div className='ExpenseList'>
        <h1>GASTOS</h1>
        <input type="search" name="search" id="search" />
        {datos.map((dato)=>{
          return <ItemList key={dato.id} dato={dato}/>
        })}
    </div>
  )
}

export default ExpenseList