import { useEffect, useState } from 'react';
import ItemList from './itemList';
import useFetchExpense from '../hooks/useFetchExpense'

function ExpenseList() {

  const [expenses,setExpeneses] = useState([])
  const {response,error,loading}=useFetchExpense()
  useEffect(()=>{
    setExpeneses(response)
  },[response])
  return error?<h4>Se ha producido un error</h4>:loading? <h4>Cargando...</h4> :(
    <div className='ExpenseList'>
        <h1>GASTOS</h1>
        <input type="search" name="search" id="search" />
        {expenses?.map((dato)=>{
          return <ItemList key={dato.id} dato={dato}/>
        })}
    </div>
  )
}

export default ExpenseList