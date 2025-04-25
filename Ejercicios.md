# Ejercicios

## Backend

1. Crear un nuevo modelo donde definir etiquetas de gasto. Este modelo debería estar asociado a las líneas de gasto para poder definir varias etiquetas para cada línea. (Many-to-Many) - DONE
2. Este modelo de etiquetas debe permitir SOLO crear etiquetas por usuario, - DONE
   todas son privadas de cada usuario y un usuario no puede utilizar las de otro. - DONE ([Lo que hago realmente es filtrar por las líneas
   cuyos tags (todos ellos) pertenezcan al usuario en sesión. Realmente se debería controlar que los tags asignados sean del mismo usuario que el de la línea al crear o modificar y así solo filtrando por usuario para sacar las expenses como ya estaba hecho sería suficiente para asegurar la corrección])
3. Este nuevo dato (las etiquetas que tiene cada linea) se deben mostrar al mostrar las líneas - DONE
4. Montar un buscador por etiquetas, cuando mostremos las líneas de un gasto, necesitaremos poder lanzar una petición para filtrar las líneas de ese gasto por la(s) etiqueta(s) que quiera el usuario. - DONE

## Frontend (React)

1. Incorporar la librería de MUI para mostrar de una forma más estética los gastos (Card, Grid, etc)
2. Sección nueva donde ver las líneas de cada gasto (navegar, consultar, mostrar)
3. Desarrollar el buscador del punto 4 del backend

---

## Ejercicio final

La finalidad de este ejercicio será la gestión de la tabla de cabeceras y las líneas desde el frontend:

1. Cabeceras: se deberá aportar la funcionalidad necesaria para:
   - Crear cabeceras (POST): se creará un pequeño formulario que permita enviar datos al backend a través de POST y esto creará un "Expense" nuevo asociado al usuario conectado.
   - Eliminar cabeceras (DELETE): se añadirá algún elemento visual a cada cabecera que permita lanzar una petición DELETE al backend y se realice el borrado de la cabecera seleccionada por el usuario.
   - Editar cabeceras (PUT): idealmente utilizando el mismo formulario que para la creación se cargarán los datos de la cabecera seleccionada por el usuario y permitirá modificarlos y se podrán enviar al backend en un petición PUT con la que se actualizarán los datos en la BBDD.

2. Líneas: se aportará la misma funcionalidad que en el punto 1 pero a las líneas "ExpenseLin"

Se valorará la funcionalidad por encima del estilo.
