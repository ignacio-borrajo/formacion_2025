# Ejercicios

## Backend

1. Crear un nuevo modelo donde definir etiquetas de gasto. Este modelo debería estar asociado a las líneas de gasto para poder definir varias etiquetas para cada línea. (Many-to-Many)
2. Este modelo de etiquetas debe permitir SOLO crear etiquetas por usuario, todas son privadas de cada usuario y un usuario no puede utilizar las de otro.
3. Este nuevo dato (las etiquetas que tiene cada linea) se deben mostrar al mostrar las líneas
4. Montar un buscador por etiquetas, cuando mostremos las líneas de un gasto, necesitaremos poder lanzar una petición para filtrar las líneas de ese gasto por la(s) etiqueta(s) que quiera el usuario.

## Frontend (React)

1. Incorporar la librería de MUI para mostrar de una forma más estética los gastos (Card, Grid, etc)
2. Sección nueva donde ver las líneas de cada gasto (navegar, consultar, mostrar)
3. Desarrollar el buscador del punto 4 del backend