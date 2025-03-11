import BusTile from "./BusTile";
import "./Buses.css";

function Buses({ buses }) {
    return <div className="buses">
        {buses.map((bus, index) => <BusTile bus={bus} key={index}></BusTile>)}
    </div>
}

export default Buses;