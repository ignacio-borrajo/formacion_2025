# ⚛️ Formacion web frontend

# Índice

1. [Día 1](#día-1)
    - [Día 1.1: Introducción a HTML, CSS, JS y React](#día-11-introducción-a-html-css-js-y-react)
    - [Día 1.2: Creación de nuestra primera app react](#día-12-creación-de-nuestra-primera-app-react)
    - [Día 1.3: Conceptos fundamentales de React](#día-13-conceptos-fundamentales-de-react)
    - [Ejercicios](#ejercicios-día-1)
2. [Día 2](#día-2)
    - [Día 2.1: Introducción al enrutamiento](#día-21-introducción-al-enrutamiento)
    - [Día 2.2: Peticiones a servicios externos](#día-22-integración-con-servicios-externos)
    - [Ejercicios](#ejercicios-día-2)


# Día 1

## Día 1.1: Introducción a HTML, CSS, JS y React

### HTML
Utilizado para definir la estructura y el contenido de una página web. Los elementos HTML están representados por etiquetas, que proporcionan significado a los navegadores sobre como mostrar el contenido. Algunas etiquetas comunes son `<html>`, `<head>`, `<body>`, `<div>`, `<p>`, `<h1>`, `<a>`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es un párrafo de ejemplo.</p>
</body>
</html>
```



### CSS
Utilizado para controlar la presentación y diseño de los elementos HTML de una página web. Permite definir cómo se verán los elementos, el color, fuente...

#### CSS en línea
Se aplica diréctamente a un elemento HTML utilizando el atributo `style`, dentro de la misma.

```html
<p style="color: blue; font-size: 16px;">Este es un párrafo con estilo en línea.</p>
```

#### CSS externo
Se utiliza un archivo separado, con extensión `.css` y se vincula a la página html.

```css
/* estilos.css */
p {
    color: red;
    font-size: 18px;
}
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo de CSS externo</title>
    <!-- Se importa el archivo CSS -->
    <link rel="stylesheet" type="text/css" href="estilos.css">
</head>
<body>
    <p>Este es un párrafo con estilo externo.</p>
</body>
</html>
```

> [!IMPORTANT]
> El CSS en línea tiene una mayor prioridad que el CSS externo.


### JavaScript
Lenguaje de programación utilizado para añadir interactividad y dinamismo a las páginas web. Se ejecuta en el navegador y permite manipular el contenido HTML, responder a eventos del usuario, enviar y recibir datos del servidor, etc...

```js
// Obtener el elemento del título
var titulo = document.querySelector('h1');

// Cambiar el texto del título
titulo.textContent = '¡Hola, mundo!';

// Agregar un evento de clic al título
titulo.addEventListener('click', function() {
    alert('¡Has hecho clic en el título!');
});
```

> [!NOTE]
> En el contexto de **React**, JavaScript se utiliza para definir la lógica de los componentes, manejar eventos de usuario, manipular el DOM de manera eficiente y gestionar el estado de la aplicación.


### React
Biblioteca de código abierto, desarrollada por Facebook, que se utiliza para construir interfaces de usuario interactivas y eficientes. Se caracteriza por estar enfocada en la creación de componentes reutilizables y su capacidad para gestionar de manera eficiente la actualización del DOM a traves del uso de un DOM virtual.

#### DOM y Virtual DOM
El DOM (Document Object Model) y el Virtual DOM son conceptos importantes en el desarrollo de aplicaciones web, especialmente en el contexto de bibliotecas y frameworks como React.

#### DOM 
Estructura jerárquica de nodos que representa todos los elementos HTML de una página web creada. Cada elemento HTML, atributo, texto y comentario en la página es un nodo en el DOM.

Pongamos un ejemplo para el siguiente código HTML:
  
```html
<!doctype html>
<html lang="en">
<head>
  <title>My blog</title>
  <meta charset="utf-8">
  <script src="blog.js"></script>
</head>
<body>
  <h1>My blog</h1>
  <div id="entry1">
    <h2>Great day bird watching</h2>
    <p>
      Today I saw three ducks!
      I named them
      Huey, Louie, and Dewey.
    </p>
    <p>
      I took a couple of photos ...
    </p>
  </div>
</body>
</html>
```
---
<p align="center">
    <img width="75%" src="https://github.com/edisasistemasdeinformacion/formacion-web-frontend/assets/125445128/36f6af1c-0b8c-4541-87aa-e206ca32c7f2"/>
</p>

#### Virtual DOM
Para optimizar las actualizaciones del DOM real, React (al igual que otros frameworks) utiliza una representación virtual del DOM (Virtual DOM).

Cuando un componente de React cambia de estado, React primero actualiza el Virtual DOM con los cambios. Luego compara el Virtual DOM actualizado con el Virtual DOM anterior, utilizando un proceso conocido como **recompilación**.  
Durante este proceso, React identifica los cambios mínimos necesarios para actualizar el DOM real. Una vez se determinan esos cambios, React actualiza el DOM real de manera mínima y eficiente, lo que mejora el rendimiento de la aplicación al evitar actualizaciones innecesarias del DOM.

<p align="center">
    <img margin="0 auto" width="50%" src="https://github.com/edisasistemasdeinformacion/formacion-web-frontend/assets/125445128/942e9950-2e36-4c36-a901-b79e904cad9f"/>
</p>
<br/>
    
## Día 1.2: Creación de nuestra primera app react

### Node js
Node.js® es un entorno de ejecución de JavaScript multiplataforma, de código abierto y gratuito que permite a los desarrolladores crear servidores, aplicaciones web, herramientas de línea de comando y scripts.

Instalar: [Node.js](https://nodejs.org/es)

### Create-react-app
Herramienta de línea de comandos (CLI) que permite crear rápidamente aplicaciones web de React. Nos permite crear un proyecto nuevo con una estructura de directorios y archivos predefinida, junto con la configuración de desarrollo ya optimizada.

### Vite
Vite es una herramienta de compilación de frontend extremadamente rápida, que impulsa la próxima generación de aplicaciones web.

> [!NOTE]
> Requiere tener una versión de npm 5.2+
> ```bash
> npm --v
> 10.2.4
> ```

### Creación de nuestro proyecto
Una vez verificada la versión de npm, procederemos a crear nuestro proyecto.

```bash
npm create vite@latest <nombre-proyecto> -- --template react
cd <nombre-proyecto>
npm install
npm run dev
```

Una vez ejecutado este comando, nos habrá creado una aplicación de ejemplo con la siguiente estructura.

```bash
📁 formacion-web-frontend
│   📄 .gitignore
│   📄 package-lock.json
│   📄 package.json
│   📄 README.md
├── 📁 node_modules
├── 📁 public
└── 📁 src
    │   📄 App.css
    │   📄 App.js
    │   📄 App.test.js
    │   📄 index.css
    │   📄 index.js
    │   📄 logo.svg
    │   📄 reportWebVitals.js
    │   📄 setupTests.js

```

#### Explicación de los ficheros y carpetas que componen la aplicación

- **package-lock.json:** Este archivo es generado automáticamente por npm y se utiliza para almacenar la información exacta sobre las versiones de todas las dependencias instaladas en el proyecto. Esto asegura que cada instalación del proyecto tenga las mismas versiones de las dependencias, evitando problemas de inconsistencia.

- **package.json:** Este archivo es fundamental en cualquier proyecto de npm. Contiene metadatos sobre el proyecto, como el nombre, la versión, las dependencias, los scripts de npm y otra información relevante. También especifica las dependencias del proyecto y sus versiones permitidas.

- **node_modules:** Este directorio contiene todas las dependencias del proyecto que son instaladas a través de npm.

- **public:** Este directorio es utilizado para almacenar archivos estáticos que serán servidos por el servidor web, como archivos HTML, imágenes, iconos, etc. Estos archivos son accesibles públicamente y son el punto de entrada principal de la aplicación web.

- **src:** Este directorio contiene el código fuente de la aplicación. Aquí es donde se encuentran los archivos JavaScript, CSS, y otros recursos que forman la estructura y la lógica de la aplicación.

#### Puesta en marcha de nuestra aplicación
En el proceso de creación del proyecto, ya se nos indicó el script para iniciar nuestra aplicación, sin embargo, también lo podremos encontrar en el fichero **package.json**
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

Una vez lancemos la aplicación, nos abrirá el navegador con la <**url:puerto**> en el que se está sirviendo.

```bash
> npm start
Compiled successfully!

You can now view formacion-web-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.27.160.1:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

<p align="center">
    <img width="75%" src="https://github.com/edisasistemasdeinformacion/formacion-web-frontend/assets/125445128/12091596-a418-4af5-88d5-f1cb2efd02ac"/>
</p>

En este punto, lo que estaremos viendo será la página principal de nuestra aplicación. Para ello, analizaremos el punto de entrada de nuestra aplicación, el archivo **src/index.js**.

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Este archivo crea un nuevo root a partir del elemento **root** del documento principal de la aplicación **public/index.html** (donde encontraremos una etiqueta `<div id="root"></div>`). Este nuevo elemento **root** será el punto de entrada para renderizar los componentes de React en el DOM del navegador.
<br>

## Día 1.3: Conceptos fundamentales de React

### JSX
Extensión de JavaScript que permite escribir código HTML dentro de archivos JavaScript. JSX es transformado por el compilador de React en llamadas a React.createElement(), por lo que en última instancia, todo el código JSX se convierte en JavaScript puro que el navegador puede entender.

```js
// Sin JSX
const element = React.createElement('h1', null, 'Hola, mundo');

// Con JSX
const element = <h1>Hola, mundo</h1>;
```

### Componentes
Los componentes son la piedra angular de React, se utilizan para crear interfaces de usuario reutilizables y modulares. En React, todo se representa como un componente (desde los elementos más pequeños como botones, hasta páginas enteras de una aplicación).  
Un componente de React no es más que una función que devuelve un fragmento de código (generalmente JSX) que define cómo se debería mostrar la interfaz de usuario.

Las características más importantes de los componentes de react son:
- **Reusabilidad:** Pueden ser utilizados en múltiples partes de la aplicación, lo que promueve la reutilización de código y facilita el mantenimiento.
- **Modularidad:** Permiten dividir la interfaz en pequeñas partes más manejables.
- **Composición:** Los componentes pueden anidarse unos dentro de otros para formar estructuras más complejas.

Un pequeño ejemplo con dos componentes, un listado de todos y cada elemento del listado:

**Listado de ToDos**
```jsx
const TodoList = () => {

    const todos = ["Todo 1", "Todo 2", "Todo 3"]

    return (
        <ul>
            {todos.map((todo, index) => (
                <ListItem key={index} todo={todo} />
            ))}
        </ul>
    );

}
```
**Item del listado de ToDos**
```jsx
const ListItem = ({ todo }) => {
    return <li>{todo}</li>;
}
```

### Props
Las propiedades son una forma de pasar datos de un componente padre a un componente hijo en React, siendo esenciales para la comunicación entre componentes y permiten la reutilización y la composición de componentes en una aplicación React. 
<p align="center">
    <img margin="0 auto" width="50%" src="https://github.com/edisasistemasdeinformacion/formacion-web-frontend/assets/125445128/34fc06ef-66a3-4e71-bab2-20e59f942103"/>
</p>
<br/>

Las características principales de las propiedades son:
- **Transmisión de información:** Las props son datos que se pasan de un componente a otro como argumentos de función. Esto significa que un componente padre puede pasar información relevante a sus componentes hijos a través de props, lo que permite que los hijos accedan y utilicen esos datos.
- **Inmutabilidad:** Las props no pueden ser modificadas por el componente hijo. Esto garantiza que las props sean tratadas como datos de solo lectura dentro del componente hijo y promueve un flujo de datos unidireccional, donde los datos fluyen de los componentes padres a los hijos sin posibilidad de cambios inesperados.

Aplicando esto a nuestro ejemplo de TodoList, podemos observar como el componente padre **TodoList** le pasa, en este caso, la información al componente **ListItem**.

### State
El estado de react es una forma de almacenar y gestionar información dentro de un componente, como valores de entrada del usuario, datos recuperados de una API, o cualquier otro tipo de información que pueda cambiar con el tiempo. Esto permite que los componentes React sean dinámicos y reactivos a las interacciones del usuario o a los cambios en los datos.  

Las características del estado de react son:
- **Datos Internos:** El estado se define y mantiene dentro de un componente. Cada componente puede tener su propio estado independiente de otros componentes, lo que permite que cada uno controle su propia información interna.
- **Accesible y Modificable:** El estado de un componente es accesible y modificable a través del método setState().
- **Reactividad**: Los cambios en el estado de un componente provocan que el componente se vuelva a renderizar automáticamente para reflejar esos cambios en la interfaz de usuario.

Refactoricemos el ejemplo anterior para usar el estado:

**Listado de ToDos**
```jsx
const ToDoList = () => {

  // Definir el estado inicial de las tareas
  const [tasks, setTasks] = useState([]);
  // Definir el estado para la nueva tarea
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, newTask]); // Agregar nueva tarea al estado
    setNewTask(''); // Limpiar el campo de entrada
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            task={task}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Ingrese una nueva tarea"
        />
        <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
}
```

**Item del listado de ToDos**
```jsx
const ListItem = ({ task, onDelete }) => {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
}
```
<p align="center">
    <img margin="0 auto" src="https://github.com/edisasistemasdeinformacion/formacion-web-frontend/blob/main/StateExample.gif" />
</p>


### Hooks
Son una característica poderosa en React que permite usar el estado y otras características de React en componentes funcionales, proporcionando una forma más sencilla y flexible de escribir componentes en React.

#### useEffect
Con este hook podemos suscribirnos a cambios, eventos, cargar datos...

```jsx
// setup contendría la lógica a ejecutar, mientras que dependencies sería el cambio al que nos suscribimos.
useEffect(setup, dependencies?)
```

#### useState
Como ya comentamos en el punto anterior, este hook nos permite añadir un estado a nuestro componente.

```jsx
/**
* state -> variable que guarda los datos
* setState -> acción que modifica el estado, siempre siente que ir nombrada como set<nombre_variable_estado>
* initialState -> valor inicial de nuestro estado
*/
const [state, setState] = useState(initialState)
```

<br />

## Ejercicios día 1

- Creación del proyecto individual
- Creación de un listado de Todos (con los todos en una variable ej: todos = [{titulo: "Titulo 1", fecha_creacion: "01/01/2024"}]).
    - Crear dos componentes: listado de todos y todoItem.
    - Mostrar en el listado en cada ToDo el título y la fecha de creación
- Manejo de eventos de creación (introducir un título, la fecha de creación se establece automáticamente) y borrado de todos.
- Aplicar estilos a los elementos.

### Ejercicios complementarios
- Modificar la funcionalidad de añadir tareas para que, al hacer clic en input de texto para añadir la tarea, se despliegue el resto de campos que tiene una tarea en nuestra bd del backend (título, contenido, fecha_creación, icono.
- Gestionar una acción de "Añadir pasos" para mostrar a mayores la creación de los pasos a crear para cada tarea (orden, título, detalle, prioridad, fecha_inicio, fecha_fin, status)

# Día 2

## Día 2.1: Introducción al enrutamiento

### React Router
Librería popular en el ecosistema de React que permite la navegación declarativa y dinámica dentro de una aplicación. Que nos permite definir cómo se debe mostrar cada una de estas secciones en función de la URL del navegador, sin necesidad de recargar la página completa.

Veamos un pequeño ejemplo:

#### Ejemplo de enrutamiento entre páginas

Primero, instalar la librería

```bash
npm install react-router-dom
```

Una vez instada, creamos un pequeño ejemplo:

```jsx
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Componentes de página
const HomePage = () => <h2>Página de inicio</h2>;
const PostsPage = () => <h2>Página de publicaciones</h2>;
const PostDetailPage = () => <h2>Detalles de la publicación</h2>;

const App = () => {
  return (
    <Router>
      <div>
        {/* Crea un menú de navegación */}
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/posts">Publicaciones</Link></li>
          </ul>
        </nav>

        {/* Rutas de tu aplicación */}
        <Route path="/" exact component={HomePage} />
        <Route path="/posts" exact component={PostsPage} />
        <Route path="/posts/:id" component={PostDetailPage} />
      </div>
    </Router>
  );
};

export default App;
```
En este ejemplo:
- Definimos tres componentes de página diferentes: HomePage, PostsPage y PostDetailPage.
- Creamos un componente de aplicación principal (App) que contiene un <Router> que envuelve toda la aplicación.
- Configuramos un menú de navegación con enlaces (Link) que apuntan a diferentes rutas de nuestra aplicación.
- Utilizamos el componente Route para definir cómo se debe renderizar cada componente de página en función de la ruta actual en la URL.

> [!NOTE]
> Además, se ha utilizado un parámetro dinámico (:id) en la ruta /posts/:id para representar el detalle de una publicación individual. Por ejemplo, si la URL es /posts/123, el componente PostDetailPage se renderizará y podrá acceder al parámetro id mediante props proporcionadas por React Router.

## Día 2.2: Integración con servicios externos

### Integración con el backend de nuestra aplicación

Integrar servicios externos es una parte fundamental del desarrollo de aplicaciones web. Para este ejemplo, vamos a querer integrar nuestro frontend contra el servicio backend que hemos creado en la [formación de backend](https://github.com/edisasistemasdeinformacion/formacion-web-backend). Para ello, utizaremos **axios**, una biblioteca que nos permite hacer peticiones HTTP fácilmente.

#### Instalación de Axios y ejemplo de petición

Para instalar [axios](https://www.npmjs.com/package/axios):
```bash
npm install axios
```


Una vez instalada la librería, ya podemos importarla y hacer nuestra primera petición:
```js
import axios from 'axios';

async function getUser() {
  try {
    const response = await axios.get('http://localhost:8000/api/...');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

#### Integración con nuestro servicio de backend
Una vez hayamos levantado nuestro backend, configuraremos la petición de nuestro listado de ToDos.

```jsx
import axios from 'axios';

//Dentro de nuestro componente de ToDoList
useEffect(() => {
  const obtenerTareas = async () => {
    try {
      const response = await api.get('http://localhost:8000/api/tareas/');
      console.log(response.data); // Aquí puedes hacer algo con los datos, como actualizar el estado de Todos
    } catch (error) {
      console.error('Error al obtener tareas:', error); //Aquí podríamos mostrar un error en pantalla
    }
  };

  obtenerTareas();
}, []);

```


Para los endpoints privados de nuestra API, necesitaremos pasarle las credenciales el backend, por lo que tendremos que mandar una cabecera `Authorization` con el token de autenticación. Para ello, configuraremos la petición de la siguiente forma:
```js
axios.get('http://localhost:8000/api/tareas/', {
    headers : {
        "Authorization": "Bearer " + <Token de autenticación del backend>
    }
});
```
---

Con axios, podemos utilizar todos los métodos HTTP para comunicarnos con el backend, así como mandarle diferente información. En este caso, podemos ver un ejemplo de creación de un item de la TodoList:
```js
axios.post('http://localhost:8000/api/tareas/', {
        "titulo": "Tarea Postman 23",
        "contenido": "Contenido creado desde Postman"
    }, {
        headers: {
            'Authorization': 'Bearer ' + <Token de autenticación del backend>
        }
    }
)
```

> [!WARNING]
> Es importante mencionar que las llamadas a servicios externos son asíncronas, por lo que las instrucciones no se realizan de forma secuencial.


##### Asíncronía en peticiones a servicios externos
La asincronía en la programación se refiere a la capacidad de ejecutar múltiples tareas de forma concurrente, es decir, sin tener que esperar a que una tarea termine para comenzar otra. Esto es especialmente útil cuando, por ejemplo, queremos mandar informació a un servicio externo pero no esperar a que nos responda. 

> [!TIP]
> Esto podría aplicarse a un sistema de notificaciones por correo, donde el usuario puede clicar en la opción de verificar cuenta, y no tener que esperar a que el servicio de mail le envie el correo. En el momento que la petición se resuelva, se motrará un mensaje en pantalla de "Correo enviado" pero el usuario habrá podido navegar por la web mientras esa petición se estaba resolviendo.


Pero, ¿qué son las promesas?. Las promesas son un mecanismo de Javascript que nos permite manejar operaciones asíncronas de forma fácil y legible. Una promesa representa un valor que estará disponible ahora, en el futuro o nunca, teniendo 3 posibles estados:
- **Pendiente:** Estado inicial de la promesa, donde la operación asíncrona aún no se ha completado.
- **Resuelta (Fulfillment):** La operación asíncrona se ha completado con éxito y se ha cumplido la promesa, devolviendo un valor.
- **Rechazada (Rejection):** La operación asíncrona ha fallado y la promesa se ha rechazado, proporcionando un motivo de error.

Para los casos en los que nuestra lógica de negocio no puede funcionar en paralelo, es decir, necesita ejecutarse de forma secuencial, tenemos dos herramientas:
- **.then .catch .finally**: El método `.then()` se ejecuta cuando la promesa se resuelve exitosamente, mientras que el método `.catch()` se ejecuta cuando la promesa es rechazada por algún motivo, mientras que `.finally` se ejecuta independientemente de si ha sido exitosa o no.
- **async/await:** `async` es una palabra clave que se utiliza para declarar una función asíncrona, lo que significa que la función siempre devuelve una promesa. `await`, por otro lado, se utiliza para esperar la resolución de una promesa dentro de una función asíncrona.

Un pequeño ejemplo de como se ven ambas opciones:

```js
// Utilizando async/await
useEffect(() => {
  const obtenerTareas = async () => {
    try {
      const response = await api.get('http://localhost:8000/api/tareas/');
      console.log(response.data); // Aquí puedes hacer algo con los datos, como actualizar el estado de Todos
    } catch (error) {
      console.error('Error al obtener tareas:', error); //Aquí podríamos mostrar un error en pantalla
    }
  };

  obtenerTareas();
}, []);
```

```js
// Utilizando .then .catch
useEffect(() => {
  api.get('http://localhost:8000/api/tareas/')
    .then(response => {
      console.log(response.data); // Aquí puedes hacer algo con los datos, como actualizar el estado de Todos
    })
    .catch(error => {
      console.error('Error al obtener tareas:', error); //Aquí podríamos mostrar un error en pantalla
    });
}, []);
```

## Ejercicios día 2

- Gestionar la petición y borrado de tareas al backend desde el listado de ToDos.
- Creación de una navbar / menu con las opciones "Home", "Añadir".
- Crear un controlador de rutas para las siguientes vistas / funcionalidades:
    - Añadir Todo
    - Detalle Todo (al clicar en un Todo de la todo list item)
    - Listado de Todos
- Creación de una vista para crear tareas y otra para la información de las tareas.

## Preview
<p align="center">
    <img width="75%" margin="0 auto" src="https://github.com/edisasistemasdeinformacion/formacion-web-frontend/assets/125445128/d3ac5d0b-13a9-43b4-ba6c-2ff738f5c840" />
</p>
<p align="center">
    <img width="75%" margin="0 auto" src="https://github.com/edisasistemasdeinformacion/formacion-web-frontend/assets/125445128/40836d47-7803-4bb9-94f2-71cfcffd948d" />
</p>
<p align="center">
    <img width="75%" margin="0 auto" src="https://github.com/edisasistemasdeinformacion/formacion-web-frontend/assets/125445128/907a6134-1a29-44c8-8f39-24de9a5b73e4" />
</p>
