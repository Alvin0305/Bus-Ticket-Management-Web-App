import TicketTile from "./TicketTile/TicketTile";
import "./Bookings.css";

function Bookings() {
  const getAllTickets = () => {
    return [
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 1,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 2,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 3,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 4,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 5,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 5,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 5,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 5,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 5,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 5,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 5,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 5,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
      {
        bookTime: new Date(),
        price: 100,
        seatNumber: 10,
        busID: 1,
        userID: 5,
        from: "Thiruvananthapuram",
        to: "Kozhikode",
        ticketID: 1,
      },
    ];
  };

  return (
    <div className="bookings-session">
      <div className="bookings-session-left-part">
        {getAllTickets().map((ticket, index) => {
          if (index % 3 == 0) {
            return <TicketTile ticket={ticket} key={index}></TicketTile>;
          }
        })}
      </div>
      <div className="bookings-session-middle-part">
      {getAllTickets().map((ticket, index) => {
          if (index % 3 == 1) {
            return <TicketTile ticket={ticket} key={index}></TicketTile>;
          }
        })}
      </div>
      <div className="bookings-session-right-part">
        {getAllTickets().map((ticket, index) => {
          if (index % 3 == 2) {
            return <TicketTile ticket={ticket} key={index}></TicketTile>;
          }
        })}
      </div>
    </div>
  );
}

export default Bookings;
