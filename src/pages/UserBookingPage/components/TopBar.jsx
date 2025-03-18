import { User2, BusFront, Headphones, LogOut } from "lucide-react";
import "./TopBar.css";
import { useLocation, useNavigate } from "react-router-dom";

function TopBar({ user }) {

  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate("/");
  }

  const handleProfile = () => {
    navigate("/profile-page", {state: {user: user}});
  }

  function handleHelp() {}

  return (
    <div className="user-booking-page-top-bar">
      <BusFront size={50} className="user-booking-page-bus-icon"></BusFront>
      <div className="user-booking-page-headphone-log-out">
        <button className="user-booking-page-headphone-button" onClick={handleHelp}>
          <Headphones className="user-booking-page-headphone-icon"></Headphones>
          Help
        </button>
        <button className="user-booking-page-logout-button" onClick={handleLogout}>
          <LogOut className="user-booking-page-logout-icon"></LogOut>
          Log Out
        </button>
        <button className="user-booking-page-profile-button" onClick={handleProfile}>
          <User2></User2>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
