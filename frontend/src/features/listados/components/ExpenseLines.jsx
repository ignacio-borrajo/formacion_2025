import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Chip } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem,Button, OutlinedInput, Box } from "@mui/material";
import useFetchLines from "../hooks/useFetchLines";

const ExpenseLines = () => {
  const { expenseId } = useParams(); 
  const [selectedLabels, setSelectedLabels] = useState([]);
  const { allLines, filteredLines, filterLines, error, loading } = useFetchLines(expenseId);

  const handleLabelChange = (event) => {
    setSelectedLabels(event.target.value);
  };

  const handleFilter = () => {
    filterLines(selectedLabels); 
  };

  const uniqueLabels = Array.from(
    new Set(allLines.flatMap((line) => line.labels.map((label) => JSON.stringify(label))))
  )
    .map((label) => JSON.parse(label));

  return (
    <div>
      <FormControl fullWidth style={{ marginBottom: "1rem" }}>
        <InputLabel id="label-select">Etiquetas</InputLabel>
        <Select
          labelId="label-select"
          multiple
          value={selectedLabels}
          onChange={handleLabelChange}
          input={<OutlinedInput label="Etiquetas" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => {
                const label = uniqueLabels.find((label) => label.id === value);
                return <Chip key={value} label={label?.name} />;
              })}
            </Box>
          )}
        >
          {uniqueLabels.map((label) => (
            <MenuItem key={label.id} value={label.id}>
              {label.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Filtrar
      </Button>
      {error ? (
        <Typography variant="h4" color="error">
          Se ha producido un error
        </Typography>
      ) : loading ? (
        <Typography variant="h4">Cargando...</Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredLines?.map((line) => (
            <Grid item xs={12} sm={6} md={4} key={line.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{line.description}</Typography>
                  <Typography variant="body2">Cantidad: {line.amount}</Typography>
                  <Typography variant="body2">Fecha: {line.date}</Typography>
                  <Typography variant="body2">
                    Etiquetas: {line.labels.map((label) => label.name).join(", ")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ExpenseLines;