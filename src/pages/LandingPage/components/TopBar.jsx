import { BusFront, Headphones, LogOut } from "lucide-react";
import "./TopBar.css";

function handleHelp() {}

function handleLogout() {}

function TopBar() {
  return (
    <div className="landing-page-top-bar">
      <BusFront size={50} className="landing-page-bus-icon"></BusFront>
      <div className="landing-page-headphone-log-out">
        <button className="landing-page-headphone-button" onClick={handleHelp}>
          <Headphones className="landing-page-headphone-icon"></Headphones>
          Help
        </button>
        <button className="landing-page-logout-button" onClick={handleLogout}>
          <LogOut className="landing-page-logout-icon"></LogOut>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default TopBar;
