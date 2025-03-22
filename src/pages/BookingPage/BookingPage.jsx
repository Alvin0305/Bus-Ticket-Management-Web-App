import { useLocation } from "react-router-dom";
import Ticket from "./Ticket/Ticket";

function BookingPage() {

    const location = useLocation();
    const {bus, selectedSeats, user} = location.state || {};

    return <div>
        <Ticket bus={bus} selectedSeats={selectedSeats} user={user} />
    </div>;
}

export default BookingPage;