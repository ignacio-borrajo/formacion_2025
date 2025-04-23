import ExpenseList from "../components/expenseList"
import React from "react"

function Expenses(){

    const [txt,setTxt]=React.useState("")

    const handlechange=(e)=>{
        setTxt(e.target.value)
    }

    const handleClick=()=>{
        console.log(txt)
    }

    return (
        <>
        <input type="text" value={txt} onChange={handlechange}></input>
        <button onClick={handleClick}>Console log</button>
        <h1>Gastos</h1>
        <ExpenseList></ExpenseList>

        </>
    )
}

export default Expenses