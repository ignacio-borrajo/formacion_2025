# Ejercicios

## Backend

1. Crear un nuevo modelo donde definir etiquetas de gasto. Este modelo debería estar asociado a las líneas de gasto para poder definir varias etiquetas para cada línea. (Many-to-Many) - DONE
2. Este modelo de etiquetas debe permitir SOLO crear etiquetas por usuario, - DONE
   todas son privadas de cada usuario y un usuario no puede utilizar las de otro. - DONE ([Lo que hago realmente es filtrar por las líneas
   cuyos tags (todos ellos) pertenezcan al usuario en sesión. Realmente se debería controlar que los tags asignados sean del mismo usuario que el de la línea al crear o modificar y así solo filtrando por usuario para sacar las expenses como ya estaba hecho sería suficiente para asegurar la corrección])
3. Este nuevo dato (las etiquetas que tiene cada linea) se deben mostrar al mostrar las líneas - DONE
4. Montar un buscador por etiquetas, cuando mostremos las líneas de un gasto, necesitaremos poder lanzar una petición para filtrar las líneas de ese gasto por la(s) etiqueta(s) que quiera el usuario. - DONE

## Frontend (React)

1. Incorporar la librería de MUI para mostrar de una forma más estética los gastos (Card, Grid, etc) - PENDING
2. Sección nueva donde ver las líneas de cada gasto (navegar, consultar, mostrar) - PENDING
3. Desarrollar el buscador del punto 4 del backend - PENDING