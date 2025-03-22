import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EditBusPage.css";

function EditBusPage() {
  const location = useLocation();
  const { bus } = location.state || {};

  const navigate = useNavigate();

  const [busName, setBusName] = useState(bus.name);
  const [type, setType] = useState(bus.type);
  const [departureTime, setDepartureTime] = useState(bus.departureTime);
  const [departure, setDeparture] = useState(bus.departure);
  const [arrivalTime, setArrivalTime] = useState(bus.arrivalTime);
  const [arrival, setArrival] = useState(bus.arrival);
  const [fare, setFare] = useState(bus.fare);

  const [editable, setEditable] = useState(false);

  const copyBusName = bus.name;
  const copyType = bus.type;
  const copyDepartureTime = bus.departureTime;
  const copyDeparture = bus.departure;
  const copyArrivalTime = bus.arrivalTime;
  const copyArrival = bus.arrival;
  const copyFare = bus.fare;

  const onEdit = () => {
    console.log(bus.name);
    console.log(departureTime);
    setEditable(true);
  };

  const onCancel = () => {
    setEditable(false);
    setBusName(copyBusName);
    setType(copyType);
    setDepartureTime(copyDepartureTime);
    setDeparture(copyDeparture);
    setArrivalTime(copyArrivalTime);
    setArrival(copyArrival);
    setFare(copyFare);
  };

  const onSave = () => {
    // add API call for editing the bus details here

    navigate("/");
  };

  const onDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this bus? This action cannot be undone"
      )
    ) {
      console.log("Bus", bus.name, "deleted");

      // enter the code for deleting the account from the database
    }
  };

  return (
    <div className="edit-bus-page">
      <div className="edit-bus-page-heading-div">
        <h1 className="edit-bus-page-heading">EDIT BUS DETAILS</h1>
      </div>
      <div className="edit-bus-page-container">
        <div className="edit-bus-page-buttons">
          {editable ? (
            <div>
              <button
                className="edit-bus-page-edit-button"
                id="edit-bus-page-cancel-button"
                onClick={onCancel}
              >
                CANCEL
              </button>
              <button className="edit-bus-page-edit-button" onClick={onSave}>
                SAVE
              </button>
            </div>
          ) : (
            <button className="edit-bus-page-edit-button" onClick={onEdit}>
              EDIT
            </button>
          )}
        </div>

        <div className="edit-bus-page-contents">
          <div className="edit-bus-page-content">
            <div className="edit-bus-page-left-part">
              <div className="edit-bus-page-data-div">
                <h3 className="edit-bus-page-label">BUS NAME</h3>
                <input
                  className={`edit-bus-page-text ${
                    editable
                      ? "edit-bus-page-editable-text"
                      : "edit-bus-page-non-editable-text"
                  }`}
                  placeholder={busName}
                  type="text"
                  value={busName}
                  onChange={(e) => {
                    setBusName(e.target.value);
                  }}
                  disabled={!editable}
                ></input>
              </div>
              <div className="edit-bus-page-data-div, edit-bus-page-fare-div">
                <h3 className="edit-bus-page-label">FARE</h3>
                <input
                  className={`edit-bus-page-text ${
                    editable
                      ? "edit-bus-page-editable-text"
                      : "edit-bus-page-non-editable-text"
                  }`}
                  placeholder={fare}
                  type="text"
                  value={fare}
                  onChange={(e) => {
                    setFare(e.target.value);
                  }}
                  disabled={!editable}
                ></input>
              </div>
            </div>
            <div className="edit-bus-page-right-part">
              <div className="edit-bus-page-data-div">
                <h3 className="edit-bus-page-label">BUS TYPE</h3>
                <input
                  className={`edit-bus-page-text ${
                    editable
                      ? "edit-bus-page-editable-text"
                      : "edit-bus-page-non-editable-text"
                  }`}
                  placeholder={bus.type}
                  type="text"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  disabled={!editable}
                ></input>
              </div>
            </div>
          </div>
          <div className="edit-page-content-wrapper">
            <h3 className="edit-bus-page-session-heading">DEPARTURE DETAILS</h3>
            <div
              className="edit-bus-page-content"
              id="edit-bus-content-with-heading"
            >
              <div className="edit-bus-page-left-part">
                <div className="edit-bus-page-data-div">
                  <h3 className="edit-bus-page-label">DEPARTURE TIME</h3>
                  <input
                    className={`edit-bus-page-text ${
                      editable
                        ? "edit-bus-page-editable-text"
                        : "edit-bus-page-non-editable-text"
                    }`}
                    placeholder={departureTime}
                    type="time"
                    value={departureTime}
                    onChange={(e) => {
                      setDepartureTime(e.target.value);
                    }}
                    disabled={!editable}
                  ></input>
                </div>
              </div>
              <div className="edit-bus-page-right-part">
                <div className="edit-bus-page-data-div">
                  <h3 className="edit-bus-page-label">DEPARTURE</h3>
                  <input
                    className={`edit-bus-page-text ${
                      editable
                        ? "edit-bus-page-editable-text"
                        : "edit-bus-page-non-editable-text"
                    }`}
                    placeholder={departure}
                    type="text"
                    value={departure}
                    onChange={(e) => {
                      setDeparture(e.target.value);
                    }}
                    disabled={!editable}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-page-content-wrapper">
            <h3 className="edit-bus-page-session-heading">ARRIVAL DETAILS</h3>
            <div
              className="edit-bus-page-content"
              id="edit-bus-content-with-heading"
            >
              <div className="edit-bus-page-left-part">
                <div className="edit-bus-page-data-div">
                  <h3 className="edit-bus-page-label">ARRIVAL TIME</h3>
                  <input
                    className={`edit-bus-page-text ${
                      editable
                        ? "edit-bus-page-editable-text"
                        : "edit-bus-page-non-editable-text"
                    }`}
                    placeholder={arrivalTime}
                    type="time"
                    value={arrivalTime}
                    onChange={(e) => {
                      setArrivalTime(e.target.value);
                    }}
                    disabled={!editable}
                  ></input>
                </div>
              </div>
              <div className="edit-bus-page-right-part">
                <div className="edit-bus-page-data-div">
                  <h3 className="edit-bus-page-label">ARRIVAL</h3>
                  <input
                    className={`edit-bus-page-text ${
                      editable
                        ? "edit-bus-page-editable-text"
                        : "edit-bus-page-non-editable-text"
                    }`}
                    placeholder={arrival}
                    type="text"
                    value={arrival}
                    onChange={(e) => {
                      setArrival(e.target.value);
                    }}
                    disabled={!editable}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="edit-page-delete-button" onClick={onDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default EditBusPage;
