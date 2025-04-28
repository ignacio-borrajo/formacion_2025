import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const LineList = ({ onSearch = () => {}, searchTerm }) => {
  const [inputValue, setInputValue] = React.useState(searchTerm || "");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="listado-lineas">
      <div className="buscador">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <TextField
              fullWidth
              label="Buscar"
              variant="outlined"
              value={inputValue}
              onChange={handleChange}
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleClick}
              size="small"
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LineList;
