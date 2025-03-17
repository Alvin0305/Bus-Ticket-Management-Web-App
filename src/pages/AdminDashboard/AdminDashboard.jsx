import Filters from "../UserBookingPage/components/Filters";
import Buses from "../UserBookingPage/components/Buses";
import { useState } from "react";
import "./AdminDashboard.css";
import TopBar from "./components/TopBar";
import NavigationSession from "./components/NavigationSession";

function AdminDashBoard() {
  const initialBuses = [
    {
      name: "Bus1",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "12:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus2",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus3",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus3",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus3",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus3",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus4",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus4",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus4",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus4",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus4",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
    {
      name: "Bus4",
      type: "VE A/C Semi Sleeper(2+2)",
      departureTime: "10:00",
      departure: "Kozhikode",
      time: "04h 30m",
      arrivalTime: "10:00",
      arrival: "Thiruvananthapuram",
      fare: "600",
      seats: 4,
    },
  ];

  const [buses, setBuses] = useState(initialBuses);
  const [session, setSession] = useState(<Buses buses={buses}></Buses>);

  return (
    <div className="admin-dashboard">
        <TopBar></TopBar>
        <NavigationSession setSession={setSession} buses={buses}></NavigationSession>
      <div className="admin-filters-and-buses">
        <Filters></Filters>
        {session}
      </div>
    </div>
  );
}

export default AdminDashBoard;
