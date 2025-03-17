import { useState } from "react";
import "./BusTile.css";
import BusDetails from "./BusDetails";

function BusTile({ bus }) {
  const [showDetails, setShowDetails] = useState(false);

  const onClick = () => {
    setShowDetails(!showDetails);
  };

  return <div className="bus-tile-wrapper">
    <div className="bus-tile">
      <div className="bus-name-and-type">
        <h2 className="bus-name">{bus.name}</h2>
        <h3 className="bus-type">{bus.type}</h3>
      </div>
      <div className="bus-dep-time-dep">
        <h2 className="bus-dep-time">{bus.departureTime}</h2>
        <h3 className="bus-dep">{bus.departure}</h3>
      </div>
      <h3 className="bus-time">{bus.time}</h3>
      <div className="bus-arr-time-arr">
        <h2 className="bus-arr-time">{bus.arrivalTime}</h2>
        <h3 className="bus-arr">{bus.arrival}</h3>
      </div>

      <h1 className="bus-fare">
        <span className="bus-fare-span">INR</span>
        {" " + bus.fare}
      </h1>
      <h3 className="bus-seats">{bus.seats + " Seats Available"}</h3>
      <button className="bus-button" onClick={onClick}>
        VIEW SEATS
      </button>
    </div>
    {showDetails ? <BusDetails bus={bus} onClose={() => {setShowDetails(false)}}></BusDetails> : null}
  </div>;
}

export default BusTile;
