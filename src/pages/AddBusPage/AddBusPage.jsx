import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AddBusPage.css";

function AddBusPage() {
  const navigate = useNavigate();

  const [busName, setBusName] = useState("");
  const [type, setType] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [arrival, setArrival] = useState("");
  const [fare, setFare] = useState();

  const onCancel = () => {
    navigate("/");
  };

  const calculateTimeDifference = () => {
    // complete this function
    // time = arrivalTime - departureTime
    return new Date();
  };

  const onSave = () => {
    // add API call for editing the bus details here
    const bus = {
      name: busName,
      type: type,
      departureTime: departureTime,
      departure: departure,
      arrivalTime: arrivalTime,
      arrival: arrival,
      fare: fare,
      time: calculateTimeDifference(),
      seats: 51,
    };

    navigate("/");
  };

  return (
    <div className="add-bus-page">
      <div className="add-bus-page-heading-div">
        <h1 className="add-bus-page-heading">ADD BUS</h1>
      </div>
      <div className="add-bus-page-container">
        <div className="add-bus-page-buttons">
          <button
            className="add-bus-page-edit-button"
            id="add-bus-page-cancel-button"
            onClick={onCancel}
          >
            CANCEL
          </button>
          <button className="add-bus-page-edit-button" onClick={onSave}>
            SAVE
          </button>
        </div>

        <div className="add-bus-page-contents">
          <div className="add-bus-page-content">
            <div className="add-bus-page-left-part">
              <div className="add-bus-page-data-div">
                <h3 className="add-bus-page-label">BUS NAME</h3>
                <input
                  className="add-bus-page-text add-bus-page-editable-text"
                  placeholder={busName}
                  type="text"
                  value={busName}
                  onChange={(e) => {
                    setBusName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="add-bus-page-data-div, add-bus-page-fare-div">
                <h3 className="add-bus-page-label">FARE</h3>
                <input
                  className="add-bus-page-text add-bus-page-editable-text"
                  placeholder={fare}
                  type="text"
                  value={fare}
                  onChange={(e) => {
                    setFare(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="add-bus-page-right-part">
              <div className="add-bus-page-data-div">
                <h3 className="add-bus-page-label">BUS TYPE</h3>
                <input
                  className="add-bus-page-text add-bus-page-editable-text"
                  placeholder={type}
                  type="text"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="add-bus-page-content-wrapper">
            <h3 className="add-bus-page-session-heading">DEPARTURE DETAILS</h3>
            <div
              className="add-bus-page-content"
              id="add-bus-content-with-heading"
            >
              <div className="add-bus-page-left-part">
                <div className="add-bus-page-data-div">
                  <h3 className="add-bus-page-label">DEPARTURE TIME</h3>
                  <input
                    className="add-bus-page-text add-bus-page-editable-text"
                    placeholder={departureTime}
                    type="time"
                    value={departureTime}
                    onChange={(e) => {
                      setDepartureTime(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="add-bus-page-right-part">
                <div className="add-bus-page-data-div">
                  <h3 className="add-bus-page-label">DEPARTURE</h3>
                  <input
                    className="add-bus-page-text add-bus-page-editable-text"
                    placeholder={departure}
                    type="text"
                    value={departure}
                    onChange={(e) => {
                      setDeparture(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="add-bus-page-content-wrapper">
            <h3 className="add-bus-page-session-heading">ARRIVAL DETAILS</h3>
            <div
              className="add-bus-page-content"
              id="add-bus-content-with-heading"
            >
              <div className="add-bus-page-left-part">
                <div className="add-bus-page-data-div">
                  <h3 className="add-bus-page-label">ARRIVAL TIME</h3>
                  <input
                    className="add-bus-page-text add-bus-page-editable-text"
                    placeholder={arrivalTime}
                    type="time"
                    value={arrivalTime}
                    onChange={(e) => {
                      setArrivalTime(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="add-bus-page-right-part">
                <div className="add-bus-page-data-div">
                  <h3 className="add-bus-page-label">ARRIVAL</h3>
                  <input
                    className="add-bus-page-text add-bus-page-editable-text"
                    placeholder={arrival}
                    type="text"
                    value={arrival}
                    onChange={(e) => {
                      setArrival(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBusPage;
