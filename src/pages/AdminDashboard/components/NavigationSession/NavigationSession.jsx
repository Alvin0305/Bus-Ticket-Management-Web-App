import NavigationButton from "./NavigationButton/NavigationButton";
import "./NavigationSession.css";

function NavigationSession({ setSelectedTab, selectedTab }) {
    return <div className="admin-dashboard-nav-session">
        <div className="admin-dashboard-nav-background">
            <div className="admin-dashboard-nav-buttons">
                <NavigationButton name="BUSES" setSelectedTab={setSelectedTab} selectedTab={selectedTab}></NavigationButton>
                <NavigationButton name="USERS" setSelectedTab={setSelectedTab} selectedTab={selectedTab}></NavigationButton>
                <NavigationButton name="BOOKINGS" setSelectedTab={setSelectedTab} selectedTab={selectedTab}></NavigationButton>
                <NavigationButton name="REVENUE" setSelectedTab={setSelectedTab} selectedTab={selectedTab}></NavigationButton>
            </div>
        </div>
    </div>
}

export default NavigationSession;