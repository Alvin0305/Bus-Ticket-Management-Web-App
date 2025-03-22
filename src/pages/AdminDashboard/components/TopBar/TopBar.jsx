import { Menu, UserCircle2 } from "lucide-react";
import "./TopBar.css";
import { useNavigate } from "react-router-dom";

function TopBar({ user }) {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate("/profile-page", {state: {user: user}});
    }

    const showDashboard = () => {}

  return (
    <div className="admin-dashboard-topbar">
      <button className="admin-dashboard-topbar-button" onClick={showDashboard}>
        <Menu size={40}></Menu>
      </button>
      <button className="admin-dashboard-topbar-button" onClick={navigateToProfile}>
        <UserCircle2 size={40}></UserCircle2>
      </button>
    </div>
  );
}

export default TopBar;
