import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación

const ItemList = ({ dato, search }) => {
  const [expense, setExpense] = React.useState(null); // Inicializa como null

  React.useEffect(() => {
    setExpense(dato);
  }, [dato]);

  return expense ? (
    <Grid item xs={12} sm={6} md={4} lg={3}> {/* Usa Grid para la disposición */}
      <Card>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            <Link to={`/expenses/${expense.id}/lines`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {expense.description}
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Límite: {expense.limit !== null ? `$${expense.limit}` : 'Sin límite'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Categoría: {expense.category}
          </Typography>
          <Typography variant="subtitle1">
            Total Gastos: ${expense.total}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Fecha: {new Date(expense.date).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ) : (
    <Typography>Cargando gasto...</Typography>
  );
};

export default ItemList;