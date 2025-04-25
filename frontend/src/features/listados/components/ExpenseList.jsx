import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import useFetchExpenses from "../hooks/useFetchExpense";
import { DataGrid } from '@mui/x-data-grid';

const ExpenseList = ({ onSearch = () => {} }) => {
  const [expenses, setExpenses] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const { response, error, loading } = useFetchExpenses();
  
  const columns =[
    {field: "description",headerName:"Descripcion"},
    {field: "category",headerName:"Categoria"},
    {field: "limit",headerName:"Limite"},
    {field: "date",headerName:"Fecha"},
    {field: "total",headerName:"Total"},
    {field:"id",headerName:"Ver Lineas", 
      renderCell:(params)=>(
        <a href={`gastos/${params.value}`}>
          {params.value}
        </a>
      )
    },
    ]

  useEffect(() => {
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
    <div className="listado-gastos w-100">
        <DataGrid rows={expenses} columns={columns}/>
    </div>
  );
};

export default ExpenseList;