import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import api from "../../../api/api";

const ExpenseLines = () => {
    const { id } = useParams();
    const [lines, setLines] = React.useState([]);
    const [error, setError] = React.useState(null);

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
        <div>
            <Typography variant="h4" gutterBottom>
                Líneas del Gasto
            </Typography>
            <Grid container spacing={2}>
                {lines.map((line) => (
                    <Grid item xs={12} sm={6} md={4} key={line.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{line.description}</Typography>
                                <Typography variant="body2">Cantidad: {line.amount}</Typography>
                                <Typography variant="body2">Fecha: {line.date}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ExpenseLines;
