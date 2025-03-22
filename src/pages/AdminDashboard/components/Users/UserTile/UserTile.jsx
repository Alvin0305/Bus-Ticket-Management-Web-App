import { useState } from "react";
import UserTickets from "../UserTickets/UserTickets";
import "./UserTile.css";

function UserTile({ user }) {
  const [showTickets, setShowTicket] = useState(false);

  const getBoyImage = () => {
    return <img src="boy.png" alt="no image" height={150} width={150} />;
  };

  const getGirlImage = () => {
    return <img src="girl.png" alt="no image" height={150} width={150} />;
  };

  const getImage = () => {
    if (user.gender === "M") {
      return getBoyImage();
    } else {
      return getGirlImage();
    }
  };

  const getTickets = () => {
    return [
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: user.userID,
        from: "Thiruvananthapuram", 
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: user.userID,
        from: "Thiruvananthapuram", 
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: user.userID,
        from: "Thiruvananthapuram", 
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: user.userID,
        from: "Thiruvananthapuram", 
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: user.userID,
        from: "Thiruvananthapuram", 
        to: "Kozhikode",
        ticketID: 1,
      },
    ];
  };

  return (
    <div className="user-tile-session-wrapper">
      <div className="users-tile-session">
        {getImage()}
        <div className="users-session-details">
          <h2 className="users-session-username">{user.name}</h2>
          <div className="users-session-horizontal-div">
            <h4 className="users-session-id">{user.userID}</h4>
            <h4 className="users-session-email">{user.email}</h4>
          </div>
          <div className="users-session-horizontal-div">
            <h4 className="users-session-phone">{user.phone}</h4>
            <h4 className="users-session-dob">{user.DOB}</h4>
          </div>
          <div className="users-session-button-div">
            <div className="users-session-spacer"></div>
            <button
              className="users-session-button"
              onClick={() => setShowTicket(!showTickets)}
            >
              VIEW TICKETS
            </button>
          </div>
        </div>
      </div>
      {showTickets && <UserTickets tickets={getTickets()}></UserTickets>}
    </div>
  );
}

export default UserTile;
