import NavigationButton from "./NavigationButton";
import "./NavigationSession.css";

function NavigationSession() {
  function handleBuses() {}
  function handleSchedules() {}
  function handleUsers() {}
  function handleBookings() {}
  function handleRevenue() {}

  return (
    <div className="admin-navigation-session">
      <div className="admin-navigation-session-background"></div>
      <div className="admin-navigation-session-buttons">
        <NavigationButton
          name="BUSES"
          onAction={handleBuses}
        ></NavigationButton>
        <NavigationButton
          name="SCHEDULES"
          onAction={handleSchedules}
        ></NavigationButton>
        <NavigationButton
          name="USERS"
          onAction={handleUsers}
        ></NavigationButton>
        <NavigationButton
          name="BOOKINGS"
          onAction={handleBookings}
        ></NavigationButton>
        <NavigationButton
          name="REVENUE"
          onAction={handleRevenue}
        ></NavigationButton>
      </div>
    </div>
  );
}

export default NavigationSession;
