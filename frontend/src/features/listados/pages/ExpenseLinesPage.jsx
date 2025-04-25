import { Button, Card, CardContent, Chip, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../api/api';

const ExpenseLinesPage = () => {
    const { expenseId } = useParams();
    const [lines, setLines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterTags, setFilterTags] = useState('');

    const fetchExpenseLines = async (tags = '') => {
        setLoading(true);
        setError(null);
        let url = `/gastos/${expenseId}/lines/`; // Ajusta la URL base para obtener las líneas
        if (tags) {
            const params = new URLSearchParams();
            tags.split(',').map(tag => tag.trim()).forEach(tag => {
                if (tag) params.append('tags', tag);
            });
            url = `/gastos/${expenseId}/lines/filter/?${params.toString()}`; // Ajusta la URL para filtrar
        }

        try {
            const response = await api.get(url);
            setLines(response.data);
        } catch (error) {
            console.error("Error fetching expense lines:", error);
            setError(error.message || "Error al cargar las líneas del gasto.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExpenseLines(); // Carga todas las líneas al montar el componente
    }, [expenseId]);

    const handleFilterChange = (event) => {
        setFilterTags(event.target.value);
    };

    const handleSearch = () => {
        fetchExpenseLines(filterTags);
    };

    if (loading) {
        return <Typography>Cargando líneas del gasto...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Líneas del Gasto ID: {expenseId}
                </Typography>

                <TextField
                    label="Filtrar por etiquetas (separadas por coma)"
                    value={filterTags}
                    onChange={handleFilterChange}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" onClick={handleSearch}>
                    Buscar
                </Button>

                {lines.length > 0 ? (
                    <List>
                        {lines.map((line) => (
                            <ListItem key={line.id} divider>
                                <ListItemText
                                    primary={line.description}
                                    secondary={`Cantidad: $${line.amount} - Fecha: ${new Date(line.date).toLocaleDateString()}`}
                                />
                                {line.tags && line.tags.map((tag) => (
                                    <Chip key={tag.id} label={tag.name} sx={{ ml: 1 }} />
                                ))}
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography>No se encontraron líneas para este gasto.</Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default ExpenseLinesPage;