import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const BACKEND_URL = "https://your-backend.onrender.com";

  const user = {
    name: "Alvin A S",
    gender: "M",
    email: "alvinanildas@gmail.com",
    password: "abcd1234",
    userID: "alvin07",
    phone: "8086290149",
    DOB: new Date().toISOString().split("T")[0],
  };

  const handleLogin = async () => {
    try {
      // const response = await axios.post(`${BACKEND_URL}/api/url/shorten`, { url });
      // if (response.status === 200) {
      navigate("/landing-page", {state: {user: user}});
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
          //   style={{ background: "#3B3F45", padding: "20px", borderRadius: "10px" }}
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