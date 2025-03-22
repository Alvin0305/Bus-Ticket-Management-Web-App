import { Bus, Currency, Ticket, Timer, User } from "lucide-react";
import "./NavigationButton.css";

function NavigationButton({ name, onAction }) {

    function getIcon() {
        if (name == "BUSES") {
            return <Bus className="admin-nav-icon" size={50}></Bus>
        } else if (name == "SCHEDULES") {
            return <Timer className="admin-nav-icon" size={50}></Timer>
        } else if (name == "USERS") {
            return <User className="admin-nav-icon" size={50}></User>
        } else if (name == "BOOKINGS") {
            return <Ticket className="admin-nav-icon" size={50}></Ticket>
        } else {
            return <Currency className="admin-nav-icon" size={50}></Currency>
        }
    }

    return <div className="admin-nav-button" onClick={onAction}>
        {getIcon()}
        <h1 className="admin-nav-text">{name}</h1>
    </div>
}

export default NavigationButton;