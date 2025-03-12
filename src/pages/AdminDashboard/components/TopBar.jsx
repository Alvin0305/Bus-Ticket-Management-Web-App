import { Menu, UserCircle } from "lucide-react";
import "./TopBar.css";

function TopBar() {
    return <div className="admin-dashboard-topbar">
        <button className="admin-menu-button">
            <Menu size={40}></Menu>
        </button>
        <button className="admin-user-button">
            <UserCircle size={40}></UserCircle>
        </button>
    </div>
}

export default TopBar;