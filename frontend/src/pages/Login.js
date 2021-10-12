import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "./Login.css";
import api from "../services/api";

const Login = ({ history }) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post("/devs", {
      username: userName,
    });

    history.push(`/dev/${response.data._id}`);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="TinDev" />
        <input
          type="text"
          placeholder="Digite seu GitHub"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
