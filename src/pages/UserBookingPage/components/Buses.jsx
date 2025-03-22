import BusTile from "./BusTile";
import "./Buses.css";

function Buses({ buses, user, from, to, date }) {
    return <div className="buses">
        {buses.map((bus, index) => <BusTile bus={bus} user={user} from={from} to={to} date={date} key={index}></BusTile>)}
    </div>
}

export default Buses;