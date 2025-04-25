import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const ItemListLin = ({ dato, //search 

}) => {
  const [expenseLin, setExpenseLin] = React.useState();

  React.useEffect(() => {
    setExpenseLin(dato);
  }, [dato]);

  const renderExpenseLin = (
    <Card style={{ backgroundColor: "#f0fcfc" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {expenseLin?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad: {expenseLin?.amount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fecha: {expenseLin?.date}
        </Typography>
      </CardContent>
    </Card>
  );

  return expenseLin ? (
    renderExpenseLin
  ) : (
    "Loading"
  );
};

export default ItemListLin;
