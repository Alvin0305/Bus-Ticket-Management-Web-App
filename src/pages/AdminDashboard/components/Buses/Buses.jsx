import { useState } from "react";
import Filters from "../../../UserBookingPage/components/Filters";
import BusSession from "./components/BusSession";
import "./Buses.css";

function Buses() {
  const getBuses = () => {
    return [
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
  };

  const [buses, setBuses] = useState(getBuses());

  return (
    <div className="admin-dashboard-buses">
      <div className="admin-dashboard-buses-filters-and-buses">
        <Filters setBuses={setBuses}></Filters>
        <BusSession buses={buses}></BusSession>
      </div>
    </div>
  );
}

export default Buses;
