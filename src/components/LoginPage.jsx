import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState(""); // Store the username
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Please enter a username!");
      return;
    }
    navigate("/dashboard", { state: { username } });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-title">College Guidance App</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
