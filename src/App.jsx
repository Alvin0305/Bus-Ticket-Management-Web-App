import { useState } from "react";
import "./App.css";
import UserBookingPage from "./pages/UserBookingPage/UserBookingPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-booking-page" element={<UserBookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
