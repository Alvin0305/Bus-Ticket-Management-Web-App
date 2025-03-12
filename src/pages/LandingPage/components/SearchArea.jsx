import "./SearchArea.css";
import { ArrowLeftRight, Calendar } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchArea() {
  const dateInputRef = useRef(null);
  const navigate = useNavigate();
  const [from, setFrom] = useState("Kozhikode");
  const [to, setTo] = useState("Thiruvananthapuram");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleButtonClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Opens the date picker
    }
  };

  function isValidArguments() {
    console.log(from.length, to.length, selectedDate.length);
    console.log(selectedDate);
    if (from.length !== 0 && to.length !== 0 && selectedDate.length !== 0) {
      return true;
    } else {
      console.log("error");
      return false;
    }
  }

  function formatDate() {
    return new Date(selectedDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
    });
  }

  function getYear() {
    return new Date(selectedDate).getFullYear();
  }

  const navigateToBookingPage = () => {
    if (isValidArguments()) {
      navigate("/user-booking-page", {
        state: { from: from, to: to, date: selectedDate },
      });
    } else {
      console.log("cannot navigate");
    }
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
            value={from}
            onChange={(e) => setFrom(e.target.value)}
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
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="landing-page-date-div">
          <h5 className="landing-page-date-label">Date</h5>
          <div className="landing-page-date-input-div">
            <input
              type="date"
              className="landing-page-date"
              ref={dateInputRef}
              value={selectedDate}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
            />
            <div className="landing-page-date-button-text">
              {selectedDate && (
                <div className="landing-page-dates-div">
                  <h3 className="landing-page-selected-date">{formatDate()}</h3>
                  <h2 className="landing-page-selected-year">{getYear()}</h2>
                </div>
              )}
              <button
                onClick={handleButtonClick}
                className="landing-page-date-button"
              >
                <Calendar size={40}></Calendar>
              </button>
            </div>
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
