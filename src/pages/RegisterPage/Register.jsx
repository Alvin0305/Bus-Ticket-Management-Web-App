import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [checkboxes, setCheckboxes] = useState(false);

  // Handler for checkbox change
  const handleCheckboxChange = (event) => {
    setCheckboxes(!checkboxes);
    // const { name, checked } = event.target;
    // setCheckboxes((prev) => ({
    //   ...prev,
    //   [name]: checked,
    // }));
  };
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!checkboxes) {
      alert("Please agree to the terms and conditions");
      return;
    }
    try {
      // const response = await axios.post(`${BACKEND_URL}/api/url/shorten`, { url });
      // if (response.status === 201) {
      navigate("/landing-page");
      // }
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <img className="register-bus-image" src="images.jpeg" alt="bus image" />
        <div
          className="register-window"
          //   style={{ background: "#3B3F45", padding: "20px", borderRadius: "10px" }}
        >
          <h2 className="register-head">Create your Account</h2>
          <p className="login-link">
            Already have an account? <a href="/">Login</a>
          </p>
          <input
            className="register-input"
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="register-input"
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="register-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="register-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="register-agree-checkbox">
            <input
              type="checkbox"
              name="agreement"
              checked={checkboxes.updates}
              onChange={handleCheckboxChange}
            />
            I agree to the <a href="/landingpage">Terms and Conditions</a>
          </div>
          <button className="register-button" onClick={handleRegister}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;