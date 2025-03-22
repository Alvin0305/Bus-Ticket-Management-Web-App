import BusTile from "./BusTile";
import "./BusSession.css";

function BusSession({ buses }) {
    return <div className="admin-dashboard-bus-session">
        {buses.map((bus, index) => <BusTile bus={bus} key={index}></BusTile>)}
    </div>
}

export default BusSession;