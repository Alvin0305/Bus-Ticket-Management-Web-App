import { Bus, Currency, Ticket, User } from "lucide-react";
import "./NavigationButton.css";
import Buses from "../../Buses/Buses";
import Users from "../../Users/Users";
import Bookings from "../../Bookings/Bookings";
import Revenue from "../../Revenue/Revenue";

function NavigationButton({ name, setSelectedTab, selectedTab }) {
  const getIcon = () => {
    if (name === "BUSES")
      return <Bus className="admin-dashboard-nav-button-icon" size={40} />;
    if (name === "USERS")
      return <User className="admin-dashboard-nav-button-icon" size={40} />;
    if (name === "BOOKINGS")
      return <Ticket className="admin-dashboard-nav-button-icon" size={40} />;
    return <Currency className="admin-dashboard-nav-button-icon" size={40} />;
  };
  
  return (
    <div
      className={`admin-dashboard-nav-button ${
        selectedTab === name ? "admin-dashboard-selected-nav-button" : ""
      }`}
      onClick={() => setSelectedTab(name)}
    >
      {getIcon()}
      <h2 className="admin-dashboard-nav-button-name">{name}</h2>
    </div>
  );
}

export default NavigationButton;
