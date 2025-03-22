import BusTile from "./BusTile";
import "./Buses.css";

function Buses({ buses, user }) {
    return <div className="buses">
        {buses.map((bus, index) => <BusTile bus={bus} user={user} key={index}></BusTile>)}
    </div>
}

export default Buses;