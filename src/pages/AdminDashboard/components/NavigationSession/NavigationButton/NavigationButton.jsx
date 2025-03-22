import { Bus, Ticket, TrendingUp, User } from "lucide-react";
import "./NavigationButton.css";
import { GiCash } from "react-icons/gi";

function NavigationButton({ name, setSelectedTab, selectedTab }) {
  
  const getIcon = () => {
    if (name === "BUSES")
      return <Bus className="admin-dashboard-nav-button-icon" size={50} />;
    if (name === "USERS")
      return <User className="admin-dashboard-nav-button-icon" size={50} />;
    if (name === "BOOKINGS")
      return <Ticket className="admin-dashboard-nav-button-icon" size={50} />;
    return <TrendingUp className="admin-dashboard-nav-button-icon" size={50} />;
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
