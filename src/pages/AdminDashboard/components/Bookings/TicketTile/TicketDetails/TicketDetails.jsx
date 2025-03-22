import "./TicketDetails.css";

function TicketDetails({ ticket }) {
  return (
    <div className="bookings-session-ticket-details">
      <div className="bookings-session-seatno-div">
        <h2 className="bookings-session-seatno-label">Seat No.</h2>
        <h2 className="bookings-session-seatno">{ticket.seatNumber}</h2>
      </div>
      <div className="bookings-session-busid-div">
        <h2 className="bookings-session-busid-label">Bus ID</h2>
        <h2 className="bookings-session-busid">{ticket.busID}</h2>
      </div>
      <div className="bookings-session-userid-div">
        <h2 className="bookings-session-userid-label">User ID</h2>
        <h2 className="bookings-session-userid">{ticket.userID}</h2>
      </div>
      <div className="bookings-session-price-div">
        <h2 className="bookings-session-price-label">Price</h2>
        <h2 className="bookings-session-price">{ticket.price}</h2>
      </div>
    </div>
  );
}

export default TicketDetails;
