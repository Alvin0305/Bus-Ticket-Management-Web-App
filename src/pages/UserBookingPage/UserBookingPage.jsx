import { useRef, useState } from "react";
import Buses from "./components/Buses";
import Filters from "./components/Filters";
import "./UserBookingPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TopBar from "./components/TopBar";

function UserBookingPage() {
  const location = useLocation();
  const {from, to, date, user} = location.state || {};

  const formatedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
  });

  const dayName = date
    .toLocaleDateString("en-GB", { weekday: "long" })
    .substring(0, 3);

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
  }

  const [buses, setBuses] = useState(getBuses());
  const navigate = useNavigate();

  const helpRef = useRef(null);

  const gotoLoginPage = () => {
    navigate("/landing-page", {state: {user: user}});
  }

  return (
    <div className="user-booking-page">
      <TopBar user={user} helpRef={helpRef}></TopBar>
      <div className="user-booking-page-heading">
        <span className="bus-ticket-heading">Bus Ticket &gt; </span>{" "}
        <span className="from-to-heading">
          {from} to {to}
        </span>
      </div>
      <div className="from-to-date-container">
        <div className="from-to-third-heading">
          <h3 className="user-booking-from">{from}</h3>
          <ArrowRight size={20}></ArrowRight>
          <h3 className="user-booking-to">{to}</h3>
        </div>

        <div className="date-container">
          <h3 className="date">{formatedDate}</h3>
          <h3 className="day">{dayName}</h3>
        </div>
        <button className="modify-button" onClick={gotoLoginPage}>Modify</button>
      </div>
      <div className="booking-page">
        <div className="filters-and-buses">
          <Filters setBuses={setBuses}></Filters>
          <Buses buses={buses} user={user} from={from} to={to} date={date}></Buses>
        </div>
      </div>
      <div className="landing-page-bottom-div" ref={helpRef}>
        <p className="landing-page-bottom-part">
          Ⓒ 2025 Redbus India Pvt Ltd. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default UserBookingPage;
