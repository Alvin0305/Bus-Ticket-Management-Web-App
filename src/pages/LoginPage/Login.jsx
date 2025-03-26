import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [showPassword, setshowPassword] = useState(true)
  const navigate = useNavigate();

  // const BACKEND_URL = "https://your-backend.onrender.com";

  // const user = {
  //   name: "Alvin A S",
  //   gender: "M",
  //   email: "alvinanildas@gmail.com",
  //   password: "abcd1234",
  //   userID: "alvin07",
  //   phone: "8086290149",
  //   DOB: new Date().toISOString().split("T")[0],
  // };

  const BACKEND_URL = "http://localhost:5000"; // Update this to your backend URL

  const handleLogin = async () => {

    if (admin) {
      navigate("/admin-dashboard-page");
    }
    try {
      const response = await axios.post(`${BACKEND_URL}/api/login`, {
        email,
        password,
      });
      if (response.status == 200)
      {
        const user = response.data.user
        navigate("/landing-page", { state: { user: user } });
      }
      console.log(response);
      }
      // }
    catch (error) {
      alert("Invalid credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  }


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
           <div className="password-field">
            <input
              className="login-input password-input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div
            className="admin-checkbox" >
            
            <input
              // id="admin-checkbox"
              type="checkbox"
              placeholder="Admin"
              value={false}
              onChange={(e) => setAdmin(e.target.value)}
            />
            Admin
          </div>
          <button className="login-button" onClick={handleLogin}>
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
