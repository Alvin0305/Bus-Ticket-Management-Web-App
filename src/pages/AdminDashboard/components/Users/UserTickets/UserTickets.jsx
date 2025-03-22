import UserTicket from "./UserTicket/UserTicket";
import "./UserTickets.css";

function UserTickets({ tickets }) {
  return (
    <div className="user-session-tickets">
      <h1 className="user-session-tickets-heading">User Tickets</h1>
      {tickets.map((ticket, index) => {
        return <UserTicket ticket={ticket}></UserTicket>;
      })}
    </div>
  );
}

export default UserTickets;
