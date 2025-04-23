import React from "react"
import ItemList from "./itemList"
import useFetchExpense from "../hooks/useFetchExpense"

function ExpenseList(){

      const{response,loading,error}=useFetchExpense()

      const [expenses,setExpenses]=React.useState([])

      React.useEffect(() => {
        if (response) {
            console.log("Expenses seteandose")
          setExpenses(response);
        }
      }, [response]);

      

    return(

        expenses ?

     <div className="listado-gastos">
    {

      expenses.map((expenses)=>{
        return <div key={expenses.id}>
          
          <ItemList dato={expenses}/>
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