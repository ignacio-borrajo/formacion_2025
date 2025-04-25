import React from "react";
import {DataGrid} from "@mui/x-data-grid";

const column = [
  { field: "limit", headerName: "Limit"},
  { field: "category", headerName: "Category"},
  { field: "total", headerName: "Total"},
  { field: "date", headerName: "Date"},
];

const rows = dato.map((item, index) => ({
  id: index,
  limit: item.limit,
  category: item.category,
  total: item.total,
  date: item.date,
}));
const ItemList = ({ dato, search }) => {
  const [expense, setExpense] = React.useState();

  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);

  return expense ? (

  <DataGrid
    rows={expense}
    columns={column}
  ></DataGrid>

  ) : (
    "Loading"
  );
};

export default ItemList;