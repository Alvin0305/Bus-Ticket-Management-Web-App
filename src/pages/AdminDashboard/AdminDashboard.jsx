import TopBar from "./components/TopBar/TopBar";
import NavigationSession from "./components/NavigationSession/NavigationSession";
import Buses from "./components/Buses/Buses";
import { useState } from "react";
import Bookings from "./components/Bookings/Bookings";
import Revenue from "./components/Revenue/Revenue";
import Users from "./components/Users/Users";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard({ user }) {

    const [selectedTab, setSelectedTab] = useState("BUSES");

    const navigate = useNavigate();

    const onAdd = () => {
        navigate("/add-bus-page");
    }

    const getSelectedTab = () => {
        if (selectedTab === "BUSES") return <Buses></Buses>
        if (selectedTab === "USERS") return <Users></Users>
        if (selectedTab === "BOOKINGS") return <Bookings></Bookings>
        return <Revenue></Revenue>
    }

    return <div className="admin-dashboard">
        <TopBar user={user}></TopBar>
        <NavigationSession setSelectedTab={setSelectedTab} selectedTab={selectedTab}></NavigationSession>
        {getSelectedTab()}
        <button className="admin-dashboard-add-button" onClick={onAdd}>+</button>
    </div>;
}

export default AdminDashboard;