import "./Ticket.css";

function Ticket({ bus, selectedSeats, user }) {
  const getSeats = () => {
    return selectedSeats.join(", "); // Simplified joining of seats
  };

  return (
    <div className="booking-ticket">
      <div className="design-left1"></div>
      <div className="design-left2"></div>
      <div className="design-right1"></div>
      <div className="design-right2"></div>
      <div className="booking-ticket-container">
        <div className="booking-ticket-left">
          <div className="booking-ticket-top">
            <h2 className="booking-ticket-date">
              {new Date().toISOString().split("T")[0]}
            </h2>
            <h2 className="booking-ticket-departure-time">
              {bus.departureTime}
            </h2>
          </div>

          <h2 className="booking-ticket-from-to">
            {bus.departure + " - " + bus.arrival}
          </h2>
          <h2 className="booking-ticket-label">BUS TICKET</h2>
          <div className="booking-ticket-fare-div">
            <h2 className="booking-ticket-fare">
              {"₹ " + bus.fare * selectedSeats.length}
            </h2>
            <h2 className="booking-ticket-seats">{"Seats: " + getSeats()}</h2>
          </div>
          <h2 className="booking-ticket-username">{user.name}</h2>
        </div>
        <div className="booking-ticket-right">
          <h2 className="booking-ticket-name">{bus.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
