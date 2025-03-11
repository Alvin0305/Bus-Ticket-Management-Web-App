import "./BusTile.css";

function BusTile( {bus} ) {
    return <div className="bus-tile">
        <div className="bus-name-and-type">
            <h2 className="bus-name">{bus.name}</h2>
            <h3 className="bus-type">{bus.type}</h3>
        </div>
        <div className="bus-dep-time-dep">
            <h2 className="bus-dep-time">{bus.departureTime}</h2>
            <h3 className="bus-dep">{bus.departure}</h3>
        </div>
        <h3 className="bus-time">{bus.time}</h3>
        <div className="bus-arr-time-arr">
            <h2 className="bus-arr-time">{bus.arrivalTime}</h2>
            <h3 className="bus-arr">{bus.arrival}</h3>
        </div>
    
        <h1 className="bus-fare"><span className="bus-fare-span">INR</span>{" " + bus.fare}</h1>
        <h3 className="bus-seats">{bus.seats + " Seats Available"}</h3>
        <button className="bus-button">
            VIEW SEATS
        </button>
    </div>
}

export default BusTile;