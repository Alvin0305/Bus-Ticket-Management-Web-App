import { useState } from "react";
import "./BusTile.css";
import { useNavigate } from "react-router-dom";

function BusTile({ bus }) {
    const [showDetails, setShowDetails] = useState(false);

    const navigate = useNavigate();

  const onClick = () => {
    navigate("/edit-bus-page", {state: {bus: bus}});
  };

  return <div className="admin-dashboard-bus-tile-wrapper">
    <div className="admin-dashboard-bus-tile">
      <div className="admin-dashboard-bus-name-and-type">
        <h2 className="admin-dashboard-bus-name">{bus.name}</h2>
        <h3 className="admin-dashboard-bus-type">{bus.type}</h3>
      </div>
      <div className="admin-dashboard-bus-dep-time-dep">
        <h2 className="admin-dashboard-bus-dep-time">{bus.departureTime}</h2>
        <h3 className="admin-dashboard-bus-dep">{bus.departure}</h3>
      </div>
      <h3 className="admin-dashboard-bus-time">{bus.time}</h3>
      <div className="admin-dashboard-bus-arr-time-arr">
        <h2 className="admin-dashboard-bus-arr-time">{bus.arrivalTime}</h2>
        <h3 className="admin-dashboard-bus-arr">{bus.arrival}</h3>
      </div>

      <h1 className="admin-dashboard-bus-fare">
        <span className="admin-dashboard-bus-fare-span">INR</span>
        {" " + bus.fare}
      </h1>
      <h3 className="admin-dashboard-bus-seats">{bus.seats + " Seats Available"}</h3>
      <button className="admin-dashboard-bus-button" onClick={onClick}>
        EDIT BUS
      </button>
    </div>
    {showDetails ? <BusDetails bus={bus} onClose={() => {setShowDetails(false)}}></BusDetails> : null}
  </div>;
}

export default BusTile;