import { useState } from "react";
import "./App.css";
import UserBookingPage from "./pages/UserBookingPage/UserBookingPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import AdminDashBoard from "./pages/AdminDashboard/AdminDashboard";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditBusPage from "./pages/EditBusPage/EditBusPage";
import AddBusPage from "./pages/AddBusPage/AddBusPage";
import BookingPage from "./pages/BookingPage/BookingPage";

function App() {

  const user = {
    name: "Alvin A S",
    gender: "M",
    email: "alvinanildas@gmail.com",
    password: "abcd1234",
    userID: "alvin07",
    phone: "8086290149",
    DOB: new Date().toISOString().split("T")[0],
  };

  return (
    <Router>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/user-booking-page" element={<UserBookingPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/admin-dashboard-page" element={<AdminDashBoard />} />
        <Route path="/edit-bus-page" element={<EditBusPage/>} />
        <Route path="/add-bus-page" element={<AddBusPage/>} />
        <Route path="/booking-page" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
