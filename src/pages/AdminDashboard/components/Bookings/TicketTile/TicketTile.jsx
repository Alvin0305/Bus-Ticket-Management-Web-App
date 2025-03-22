import { useState } from "react";
import "./TicketTile.css";
import TicketDetails from "./TicketDetails/TicketDetails";

function TicketTile({ ticket }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bookings-session-ticket-wrapper">
      <div
        className={!showDetails ? "bookings-session-ticket" : "bookings-session-ticket-clicked"}
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="bookings-session-ticket-date-div">
          <h3 className="bookings-session-ticket-date">
            {ticket.bookTime.getDate()}
          </h3>
          <h3 className="bookings-session-ticket-month">
            {ticket.bookTime.toLocaleString("en-US", { month: "long" }) +
              " " +
              ticket.bookTime.getFullYear()}
          </h3>
          <h3 className="bookings-session-ticket-day">
            {ticket.bookTime.toLocaleString("en-US", { weekday: "long" })}
          </h3>
        </div>
        <h3 className="bookings-session-ticket-from">
          {ticket.from + " - " + ticket.to}
        </h3>
        <div className="bookings-session-ticketid-div">
          <h3 className="bookings-session-ticketid-label">Ticket ID</h3>
          <h3 className="bookings-session-ticketid">{ticket.ticketID}</h3>
        </div>
      </div>
      {showDetails && <TicketDetails ticket={ticket}></TicketDetails>}
    </div>
  );
}

export default TicketTile;
