import { useState } from "react";
import Buses from "./components/Buses";
import Filters from "./components/Filters";
import "./UserBookingPage.css";

function UserBookingPage({ from, to, date }) {
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
  ];

  const formatedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
  });

  const dayName = date
    .toLocaleDateString("en-GB", { weekday: "long" })
    .substring(0, 3);

  const [buses, setBuses] = useState(initialBuses);

  return (
    <div className="user-booking-page">
      <div className="user-booking-page-heading">
        <span className="bus-ticket-heading">Bus Ticket &gt; </span>{" "}
        <span className="from-to-heading">
          {from} to {to}
        </span>
      </div>
      <div className="from-to-subheading">
        {from} to {to} Bus
      </div>
      <div className="from-to-date-container">
        <div className="from-to-third-heading">
          <h3 className="user-booking-from">{from}</h3>
          <h3 className="user-booking-arrow"> → </h3>
          <h3 className="user-booking-to">{to}</h3>
        </div>

        <div className="date-container">
          <h3 className="date">{formatedDate}</h3>
          <h3 className="day">{dayName}</h3>
        </div>
      </div>
      <div className="booking-page">
        <div className="filters-and-buses">
          <Filters></Filters>
          <Buses buses={buses}></Buses>
        </div>
      </div>
    </div>
  );
}

export default UserBookingPage;
