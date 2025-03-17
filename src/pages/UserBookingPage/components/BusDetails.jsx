import { XCircle } from "lucide-react";
import Seats from "./Seats";
import "./BusDetails.css";

function BusDetails({ bus, onClose }) {
  return (
    <div className="bus-details">
      <div className="bus-details-top">
        <div className="bus-details-price-div">
          <h1 className="bus-details-price-label">SEAT PRICE</h1>
          <h1 className="bus-details-price">
            <span className="bus-details-inr">INR</span>600
          </h1>
        </div>
        <XCircle size={32} onClick={onClose}></XCircle>
      </div>
      <div className="bus-details-bottom">
        <div className="bus-details-seat-label-div">
          <h2 className="bus-details-seat-label">
            Click on the Available seat to proceed with your transaction
          </h2>
        </div>
        <div className="bus-details-seats-and-legend">
          <Seats></Seats>
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
            <button className="bus-details-book-button">BOOK TICKETS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusDetails;
