import { XCircle } from "lucide-react";
import Seats from "./Seats";
import "./BusDetails.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RouteSegments from "./RouteSegment/RouteSegments";

function BusDetails({ bus, onClose, user, from, to, date }) {
  const getBookedSeats = () => {
    // replace with corresponding API call to get the seats booked in this bus
    return [];
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(getBookedSeats());
  const navigate = useNavigate();

  const getRoutes = () => {
    // replace with API call to get the route segment for the selected bus
    return [
      {
        location: "Kozhikode", 
        departure: new Date().toISOString().split("T")[1].slice(0, 8),
        arrival: new Date().toISOString().split("T")[1].slice(0, 8)
      }, 
      {
        location: "Malappuram", 
        departure: new Date().toISOString().split("T")[1].slice(0, 8),
        arrival: new Date().toISOString().split("T")[1].slice(0, 8)
      }, 
      {
        location: "Thrissur", 
        departure: new Date().toISOString().split("T")[1].slice(0, 8), 
        arrival: new Date().toISOString().split("T")[1].slice(0, 8)
      }, 
      {
        location: "Ernakulam", 
        departure: new Date().toISOString().split("T")[1].slice(0, 8), 
        arrival: new Date().toISOString().split("T")[1].slice(0, 8)
      }, 
      {
        location: "Kottayam", 
        departure: new Date().toISOString().split("T")[1].slice(0, 8), 
        arrival: new Date().toISOString().split("T")[1].slice(0, 8)
      }, 
      {
        location: "Alappuzha", 
        departure: new Date().toISOString().split("T")[1].slice(0, 8), 
        arrival: new Date().toISOString().split("T")[1].slice(0, 8)
      }, 
      {
        location: "Kollam", 
        departure: new Date().toISOString().split("T")[1].slice(0, 8), 
        arrival: new Date().toISOString().split("T")[1].slice(0, 8)
      }, 
      {
        location: "Thiruvananthapuram", 
        departure: new Date().toISOString().split("T")[1].slice(0, 8), 
        arrival: new Date().toISOString().split("T")[1].slice(0, 8)
      }, 
    ];
  }

  const onClick = () => {
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    if (selectedSeats.length != 0) {
      navigate("/booking-page", {
        state: {
          selectedSeats: selectedSeats,
          user: user,
          bus: bus,
          bookedSeats: bookedSeats,
          from: from, 
          to: to, 
          date: date
        },
      });
    }

    // add API call for adding selectedSeats to the bookedSeats list
  };

  return (
    <div className="bus-details">
      <div className="bus-details-top">
        <div className="bus-details-price-div">
          <h1 className="bus-details-price-label">SEAT PRICE</h1>
          <h1 className="bus-details-price">
            <span className="bus-details-inr">INR</span>600
          </h1>
        </div>
        <div className="bus-details-close-icon-div">
          <XCircle
            size={32}
            onClick={onClose}
            className="bus-details-close-icon"
          ></XCircle>
        </div>
      </div>
      <div className="bus-details-bottom">
        <div className="bus-details-seat-label-div">
          <h2 className="bus-details-seat-label">
            Click on the Available seat to proceed with your transaction
          </h2>
        </div>
        <div className="bus-details-seats-and-legend">
          <Seats
            bus={bus}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            bookedSeats={bookedSeats}
          ></Seats>
          <div className="bus-details-right-div">
            <h2 className="bus-details-legend-label">SEAT LEGEND</h2>
            <div className="bus-details-legend">
              <div className="bus-details-available-seat-div">
                <div className="bus-details-available-seat"></div>
                <h4 className="bus-details-available-seat-label">Available</h4>
              </div>
              <div className="bus-details-available-seat-div">
                <div className="bus-details-not-available-seat"></div>
                <h4 className="bus-details-not-available-seat-label">
                  Not Available
                </h4>
              </div>
            </div>
            <button className="bus-details-book-button" onClick={onClick}>
              BOOK TICKETS
            </button>
          </div>
          <RouteSegments routes={getRoutes()} />
        </div>
      </div>
    </div>
  );
}

export default BusDetails;
