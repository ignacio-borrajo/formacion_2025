import React from "react";
import ItemList from "./ItemList";
import useFetchExpenses from "../hooks/useFetchExpense";

const ExpenseList = ({ onSearch = () => {} }) => {
  const [expenses, setExpenses] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const { response, error, loading } = useFetchExpenses();

  React.useEffect(() => {
    if (response) {
      setExpenses(response);
    }
  }, [response]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    onSearch(inputValue);
  };

  return error ? (
    <h4>Se ha producido un error</h4>
  ) : loading ? (
    <h4>Cargando...</h4>
  ) : (
    <div className="listado-gastos">
      <input type="text" placeholder="Buscar" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Buscar</button>
      {expenses.map((dato) => {
        return <ItemList key={dato.id} dato={dato} search={inputValue} />;
      })}
    </div>
  );
};

export default ExpenseList;
