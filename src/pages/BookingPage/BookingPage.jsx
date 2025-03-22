import { useLocation, useNavigate } from "react-router-dom";
import Ticket from "./Ticket/Ticket";
import "./BookingPage.css";
import Seats from "../UserBookingPage/components/Seats";

function BookingPage() {
  const location = useLocation();
  const { selectedSeats, user, bus, bookedSeats, from, to, date } =
    location.state || {};

  const navigate = useNavigate();

  const onConfirm = () => {
    // handle API for confirming the ticket
    
    navigate("/user-booking-page", {
      state: { from: from, to: to, date: date, user: user },
    });
    alert("Ticket has been booked");
  };

  const onCancel = () => {
    navigate("/user-booking-page", {
      state: { from: from, to: to, date: date, user: user },
    });
  };

  return (
    <div className="booking-ticket-page">
      <div className="booking-page-container">
        <Ticket bus={bus} selectedSeats={selectedSeats} user={user} />
        <div className="booking-page-right-part">
          <div className="booking-page-buttons">
            <button
              className="booking-page-button"
              id="booking-page-cancel-button"
              onClick={onCancel}
            >
              CANCEL
            </button>
            <button className="booking-page-button" onClick={onConfirm}>
              CONFIRM
            </button>
          </div>
          <Seats
            bus={bus}
            selectedSeats={selectedSeats}
            setSelectedSeats={() => {}}
            bookedSeats={bookedSeats}
            hoverValue={true}
          ></Seats>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
