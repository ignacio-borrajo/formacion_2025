import React from "react";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {
  const handleSearch = (searchTerm) => {
    // Aquí puedes manejar la búsqueda, por ejemplo, filtrando los gastos
  };

  return (
    <>
      <h1>GASTOS</h1>
      <ExpenseList onSearch={handleSearch} />
    </>
  );
};

export default Expenses;
