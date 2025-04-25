import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

const ItemList = ({ dato, search }) => {
  const [rows,setRows] = useState([])

  useEffect(() => {
    setRows([
      {id: dato.id,Description: dato.description, Category: dato.category, Limit: dato.limit , Date: dato.date, Total: dato.total},
    ])
  }, [dato]);

  return rows ? (
    <div style={{ width:"100%"}}>
      
    </div>
  ) : (
    "Loading"
  );
};

export default ItemList;