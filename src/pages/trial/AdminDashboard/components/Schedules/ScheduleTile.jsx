import "./ScheduleTile.css";

function ScheduleTile({ bus }) {
  return (
    <div className="schedule-tile">
      <h2 className="schedule-name">{bus.name}</h2>
      <div className="schedule-dep-time-dep">
        <h2 className="schedule-dep-time">{bus.departureTime}</h2>
        <h3 className="schedule-dep">{bus.departure}</h3>
      </div>
      <h3 className="schedule-time">{bus.time}</h3>
      <div className="schedule-arr-time-arr">
        <h2 className="schedule-arr-time">{bus.arrivalTime}</h2>
        <h3 className="schedule-arr">{bus.arrival}</h3>
      </div>
    </div>
  );
}

export default ScheduleTile;
