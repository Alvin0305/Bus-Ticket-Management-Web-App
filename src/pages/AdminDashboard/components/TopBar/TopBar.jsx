import { Bus, BusFront, LogOut, Menu, UserCircle2 } from "lucide-react";
import "./TopBar.css";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("/");
  };

  return (
    <div className="admin-dashboard-topbar">
      <BusFront size={60} color="#F46E6E"></BusFront>
      <button
        className="admin-dashboard-topbar-button"
        onClick={navigateToProfile}
      >
        <LogOut size={24} className="admin-dashboard-button-icon"></LogOut>
        LogOut
      </button>
    </div>
  );
}

export default TopBar;
