import { Card, CardContent, Link, Typography } from "@mui/material";
import React from "react";

const ItemList = ({ dato, //search 

}) => {
  const [expense, setExpense] = React.useState();

  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);

  const renderExpense = (
    <Card style={{ backgroundColor: "#f0fcfc" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link href={`lines/${dato.id}/`} underline="hover">
            {expense?.description}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Límite: {expense?.limit}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Gastos: {expense?.total}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fecha: {expense?.date}
        </Typography>
      </CardContent>
    </Card>
  );

  return expense ? (
    renderExpense
  ) : (
    "Loading"
  );
};

export default ItemList;
