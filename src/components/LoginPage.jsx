import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState(""); // Username input
  const [isAdmin, setIsAdmin] = useState(false); // Track admin login checkbox
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = () => {
    if (!username.trim()) {
      alert("Please enter your username!");
      return;
    }

    // Redirect to admin or user dashboard
    if (isAdmin) {
      navigate("/admin", { state: { username } });
    } else {
      navigate("/dashboard", { state: { username } });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-title">Login</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <div className="admin-checkbox">
          <input
            type="checkbox"
            id="adminLogin"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          <label htmlFor="adminLogin">Admin Login</label>
        </div>
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
