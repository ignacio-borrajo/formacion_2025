import React from 'react'
import ExpenseList from '../components/ExpenseList'

const Expenses = () => {
    return (
        <>
            <h1>GASTOS</h1>
            <ExpenseList onSearch={handleSeacrh()}/>
        </>
    )
}

export default Expenses