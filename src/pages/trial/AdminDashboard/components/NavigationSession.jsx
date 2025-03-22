import NavigationButton from "./NavigationButton";
import "./NavigationSession.css";
import Schedules from "./Schedules/Schedules";
import Buses from "../../UserBookingPage/components/Buses";
import Booking from "./Bookings";
import Revenue from "./Revenue";
import User from "./Users/UserSession";
import UserSession from "./Users/UserSession";

function NavigationSession({ setSession, buses }) {
  function handleBuses() {
    setSession(<Buses buses={buses}></Buses>);
  }
  function handleSchedules() {
    setSession(<Schedules></Schedules>);
  }
  function handleUsers() {
    setSession(<UserSession></UserSession>);
  }
  function handleBookings() {
    setSession(<Booking></Booking>)
  }
  function handleRevenue() {
    setSession(<Revenue></Revenue>)
  }

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
