import "./SearchArea.css";
import { ArrowLeftRight, Calendar } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchArea() {
  const dateInputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleButtonClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Opens the date picker
    }
  };

  const navigate = useNavigate();

  const navigateToBookingPage = () => {
    navigate("/user-booking-page", {
      state: { from: "Kozhikode", to: "Thiruvananthapuram", date: new Date().toISOString() },
    });
  };

  return (
    <div className="landing-page-search-area">
      <div className="landing-page-search-bar">
        <div className="landing-page-from-div">
          <h5 className="landing-page-from-label">From</h5>
          <input
            type="text"
            className="landing-page-from"
            placeholder="Kozhikode"
          />
          <button className="landing-page-swap-button">
            <ArrowLeftRight className="landing-page-swap-icon"></ArrowLeftRight>
          </button>
        </div>

        <div className="landing-page-to-div">
          <h5 className="landing-page-to-label">To</h5>
          <input
            type="text"
            className="landing-page-to"
            placeholder="Thiruvananthapuram"
          />
        </div>
        <div className="landing-page-date-div">
          <h5 className="landing-page-date-label">Date</h5>
          <div className="landing-page-date-button-text">
            <input
              type="date"
              className="landing-page-date"
              ref={dateInputRef}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <button
              onClick={handleButtonClick}
              className="landing-page-date-button"
            >
              <Calendar size={40}></Calendar>
            </button>
            {selectedDate && (
              <p className="landing-page-selected-date">{selectedDate}</p>
            )}
          </div>
        </div>
        <button
          className="landing-page-search-button"
          onClick={navigateToBookingPage}
        >
          SEARCH BUSES
        </button>
      </div>
    </div>
  );
}

export default SearchArea;
