import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./app.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Para la navegación

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!username || !password) {
      setError('Por favor, complete todos los campos');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Realizamos la solicitud POST al backend para hacer login
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Si la respuesta es exitosa, almacenamos el token y redirigimos al menú
        localStorage.setItem('token', data.token);  // Guardar el token en el localStorage
        navigate('/menu');  // Redirigir a /menu
      } else {
        // Si hay un error en el backend, mostrar el mensaje de error
        setError(data.detail || 'Hubo un problema al hacer login');
      }
    } catch (error) {
      // Capturar errores en caso de problemas con la solicitud
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </button>
      </form>
    </div>
  );
};

export default Login;
