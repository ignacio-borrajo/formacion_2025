import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ItemList = ({ dato }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link to={`/gastos/${dato.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              {dato.description}
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Límite: {dato.limit}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Categoría: {dato.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Gastos: {dato.total}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fecha: {dato.date}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ItemList;