import "./UserTicket.css";

function UserTicket({ ticket }) {
  return (
      <div className="users-session-ticket">
        <div className="users-session-ticket-date-div">
          <h3 className="users-session-ticket-date">
            {ticket.bookTime.getDate()}
          </h3>
          <h3 className="users-session-ticket-month">
            {ticket.bookTime.toLocaleString("en-US", { month: "long" }) +
              " " +
              ticket.bookTime.getFullYear()}
          </h3>
          <h3 className="users-session-ticket-day">
            {ticket.bookTime.toLocaleString("en-US", { weekday: "long" })}
          </h3>
        </div>
        <h3 className="users-session-ticket-from">
          {ticket.from + " - " + ticket.to}
        </h3>
        <div className="users-session-ticketid-div">
          <h3 className="users-session-ticketid-label">Ticket ID</h3>
          <h3 className="users-session-ticketid">{ticket.ticketID}</h3>
        </div>
      </div>
  );
}

export default UserTicket;
