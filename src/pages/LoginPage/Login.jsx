import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const BACKEND_URL = "https://your-backend.onrender.com";

  const handleLogin = async () => {
    try {
      // const response = await axios.post(`${BACKEND_URL}/api/url/shorten`, { url });
      // if (response.status === 200) {
      navigate("/landingpage");
      // }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img className="login-bus-image" src="images.jpeg" alt="bus image" />
        <div
          className="login-window"
        >
          <h2 className="login-head">Login to your Account</h2>
          <p className="reg-link">
            Don't have an account? <a href="/register">Register</a>
          </p>
          <input
            className="login-input"
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
