import React from "react";
import useFetchExpenseLins from "../hooks/useFetchExpenseLin";
import ItemListLin from "./ItemListLin";

const ExpenseLinList = ({ onSearch = () => {} , expenseId}) => {
  const [expense_lins, setExpense_Lins] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const { response, error, loading } = useFetchExpenseLins(expenseId);

  React.useEffect(() => {
    if (response) {
      setExpense_Lins(response);
    }
  }, [response]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (!inputValue) {
      return;
    }
    setExpense_Lins(() =>
      expense_lins.filter((lin) =>
        lin.description.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  return error ? (
    <h4>Se ha producido un error</h4>
  ) : loading ? (
    <h4>Cargando...</h4>
  ) : (
    <div className="listado-lineas">
      <input type="text" placeholder="Buscar" value={inputValue} onChange={handleChange} />
      <button onClick={handleSearch}>Buscar</button>
      {expense_lins?.map((dato) => (
        <>
          <ItemListLin key={dato.id} dato={dato} search={inputValue} />
          <br />
        </>
      ))}
    </div>
  );
};

export default ExpenseLinList;