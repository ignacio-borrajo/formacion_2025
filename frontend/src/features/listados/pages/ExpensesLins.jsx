import React from "react";
import { useParams } from "react-router-dom";
import ExpenseLinList from "../components/ExpenseLinList";

const ExpenseLins = () => {
  const handleSearch = (//searchTerm

  ) => {
    // Aquí puedes manejar la búsqueda, por ejemplo, filtrando los gastos
  };

  const { expenseId } = useParams();

  return (
    <>
      <ExpenseLinList onSearch={handleSearch} expenseId={expenseId} />
    </>
  );
};

export default ExpenseLins;
