import { User2, BusFront, Headphones, LogOut } from "lucide-react";
import "./TopBar.css";
import { useLocation, useNavigate } from "react-router-dom";

function TopBar({ user, helpRef }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleProfile = () => {
    console.log("in top bar: ", user);
    navigate("/profile-page", { state: { user: user } });
  };

  const handleHelp = () => {
    console.log("going to help");
    if (helpRef?.current) {
      helpRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("error");
    }
  };

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
        <button className="landing-page-profile-button" onClick={handleProfile}>
          <User2></User2>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
