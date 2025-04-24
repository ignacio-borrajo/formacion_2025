import React from "react";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleClick = () => {
    setError(null);
    api
      .post("token/", {
        username,
        password,
      })
      .then((response) => {
        sessionStorage.setItem("access", response.data.access);
        sessionStorage.setItem("refresh", response.data.refresh);
        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError("Invalid username or password");
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleClick}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default LoginForm;