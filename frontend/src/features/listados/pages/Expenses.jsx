import React from "react";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {
  const handleSearch = (searchTerm) => {
  };

  return (
    <>
      <h1>GASTOS</h1>
      <ExpenseList onSearch={handleSearch} />
    </>
  );
};

export default Expenses;