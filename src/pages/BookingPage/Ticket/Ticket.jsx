import "./Ticket.css";

function Ticket({ bus, selectedSeats, user }) {

    const getSeats = () => {
        var seats = "" + selectedSeats[0];
        for (var i = 1; i < selectedSeats.length; i++) {
            seats = seats + ", " + selectedSeats[i];
        }
        return seats;
    }

    return (
        <div className="booking-ticket">
            <div className="booking-ticket-container">
                <h2 className="booking-ticket-date">{new Date().toISOString().split("T")[0]}</h2>
                <div className="booking-ticket-left">
                    <h2 className="booking-ticket-from-to">
                        {bus.departure + " - " + bus.arrival}
                    </h2>
                    <h2 className="booking-ticket-label">BUS TICKET</h2>
                    <div className="booking-ticket-fare-div">
                        <h2 className="booking-ticket-fare">{bus.fare * selectedSeats.length}</h2>
                        <h2 className="booking-ticket-seats">{getSeats()}</h2>
                    </div>
                    <h2 className="booking-tickets-name">{user.name}</h2>
                </div>
                <div className="booking-ticket-right">
                    {bus.name}
                </div>
                <div>
                    {bus.departureTime}
                </div>
            </div>
        </div>
    );
}

export default Ticket;
