import "./TicketDetails.css";

function TicketDetails({ ticket, setShowDetails }) {
  return (
    <div className="bookings-session-ticket-details" onClick={() => setShowDetails(false)}>
      <div className="bookings-session-seatno-div">
        <h3 className="bookings-session-seatno-label">Seat No.</h3>
        <h3 className="bookings-session-seatno">{ticket.seatNumber}</h3>
      </div>
      <div className="bookings-session-busid-div">
        <h3 className="bookings-session-busid-label">Bus ID</h3>
        <h3 className="bookings-session-busid">{ticket.busID}</h3>
      </div>
      <div className="bookings-session-userid-div">
        <h3 className="bookings-session-userid-label">User ID</h3>
        <h3 className="bookings-session-userid">{ticket.userID}</h3>
      </div>
      <div className="bookings-session-price-div">
        <h3 className="bookings-session-price-label">Price</h3>
        <h3 className="bookings-session-price">{ticket.price}</h3>
      </div>
    </div>
  );
}

export default TicketDetails;
