import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importar Link desde react-router-dom
import "./app.css";

const Register = () => {
  // State para los campos del formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      // Realizamos la solicitud POST al backend para registrar al usuario
      const response = await fetch('http://localhost:8000/register/', {
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
        // Si la respuesta es exitosa, mostrar un mensaje de éxito
        alert('Usuario registrado con éxito');
      } else {
        // Si hay un error en el backend, mostrar el mensaje de error
        setError(data.detail || 'Hubo un problema al registrar el usuario');
      }
    } catch (error) {
      // Capturar errores en caso de problemas con la solicitud
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Registro de Usuario</h2>
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
          {loading ? 'Registrando...' : 'Registrar'}
        </button>
      </form>

      {/* Botón que lleva a la página de login */}
      <div className="login-link">
        <p>¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link></p>
      </div>
    </div>
  );
};

export default Register;
