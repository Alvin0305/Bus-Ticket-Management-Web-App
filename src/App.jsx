import { useState } from "react";
import "./App.css";
import UserBookingPage from "./pages/UserBookingPage/UserBookingPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import AdminDashBoard from "./pages/AdminDashboard/AdminDashboard";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/user-booking-page" element={<UserBookingPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" element={<AdminDashBoard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
