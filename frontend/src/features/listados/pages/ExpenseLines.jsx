import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Card, CardContent, TextField, Button } from "@mui/material";
import api from "../../../api/api";
import "./ExpenseLines.css";

const ExpenseLines = () => {
    const { id } = useParams();
    const [lines, setLines] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState(""); // Estado para el input de búsqueda

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm.trim() === "") {
            // Si el término de búsqueda está vacío, recupera todas las líneas
            api
                .get(`http://127.0.0.1:8000/api/gastos/${id}/`)
                .then((response) => setLines(response.data.lines))
                .catch((err) => setError("Error fetching expense lines"));
        } else {
            // Filtra las líneas según los tags
            const filteredLines = lines.filter((line) =>
                line.tags.some((tag) => tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            setLines(filteredLines);
        }
    };

    React.useEffect(() => {
        api
            .get(`http://127.0.0.1:8000/api/gastos/${id}/`)
            .then((response) => { console.log(response); setLines(response.data.lines) })
            .catch((err) => setError("Error fetching expense lines"));
    }, [id]);

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <>
            <form onSubmit={handleSearch} >
                <TextField
                    label="Buscar por tags"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado del input
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Buscar
                </Button>
            </form>
            <div>
                <Typography variant="h4" gutterBottom>
                    Líneas de Gasto
                </Typography>
                <Grid container spacing={2}>
                    {lines.map((line) => (
                        <Grid item xs={12} sm={6} md={4} key={line.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{line.description}</Typography>
                                    <Typography variant="body2">Cantidad: {line.amount}</Typography>
                                    <Typography variant="body2">Fecha: {line.date}</Typography>
                                    <Typography variant="body2">
                                        Tags: {line.tags.map((t) => t.name).join(", ")}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default ExpenseLines;
