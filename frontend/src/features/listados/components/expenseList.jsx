import React from "react"
import ItemList from "./itemList"
import useFetchExpense from "../hooks/useFetchExpense"

function ExpenseList(){

        const[response,loading,error]=useFetchExpense()

      const [expenses,setExpenses]=React.useState([])

      React.useEffect(()=>{
        response ? setExpenses(response) :console.log(error)

      },[response])

      

    return(

        expenses ?

     <div className="listado-gastos">
    {

      expenses.map((expense)=>{
        return <div key={expense.id}>
          
          <ItemList dato={expense}/>
        </div>
      }
    )}
  </div>
  :
  <div>
    "Loading"
  </div>
  
)
}

export default ExpenseList