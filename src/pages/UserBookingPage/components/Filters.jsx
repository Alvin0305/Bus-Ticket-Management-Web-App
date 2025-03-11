import { useState } from "react";
import "./Filters.css";

function Filters() {
  const [arrivalBefore6AM, setArrivalBefore6AM] = useState(true);
  const [arrival6AMto12PM, setArrival6AMto12PM] = useState(true);
  const [arrival12PMto6PM, setArrival12PMto6PM] = useState(true);
  const [arrivalAfter6PM, setArrivalAfter6PM] = useState(true);

  const [seater, setSeater] = useState(true);
  const [sleaper, setSleaper] = useState(true);
  const [AC, setAC] = useState(true);
  const [nonAC, setNonAC] = useState(true);

  const [departureBefore6AM, setDepartureBefore6AM] = useState(true);
  const [departure6AMto12PM, setDeparture6AMto12PM] = useState(true);
  const [departure12PMto6PM, setDeparture12PMto6PM] = useState(true);
  const [departureAfter6PM, setDepartureAfter6PM] = useState(true);

  const [superFast, setSuperFast] = useState(true);
  const [fast, setFast] = useState(true);
  const [ordinary, setOrdinary] = useState(true);
  const [limitedStop, setLimitedStop] = useState(true);

  return (
    <div className="filter">
      <div className="filter-and-reset">
        <h3 className="filter-heading" id="filter">
          FILTERS
        </h3>
        <h3 className="reset-heading">RESET</h3>
      </div>
      <h3>DEPARTURE TIME</h3>
      <div className="checkbox-area">
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={departureBefore6AM}
            onChange={setDepartureBefore6AM}
          />
          Before 6AM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={departure6AMto12PM}
            onChange={setDeparture6AMto12PM}
          />
          6AM to 12PM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={departure12PMto6PM}
            onChange={setDeparture12PMto6PM}
          />
          12PM to 6PM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={departureAfter6PM}
            onChange={setDepartureAfter6PM}
          />
          After 6PM
        </div>
      </div>

      <h3>BUS TYPE</h3>
      <div className="checkbox-area">
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={seater}
            onChange={setSeater}
          />
          SEATER
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={sleaper}
            onChange={setSleaper}
          />
          SLEAPER
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={AC}
            onChange={setAC}
          />
          AC
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={nonAC}
            onChange={setNonAC}
          />
          NON AC
        </div>
      </div>

      <h3>ARRIVAL TIME</h3>
      <div className="checkbox-area">
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={arrivalBefore6AM}
            onChange={setArrivalBefore6AM}
          />
          Before 6AM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={arrival6AMto12PM}
            onChange={setArrival6AMto12PM}
          />
          6AM to 12PM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={arrival12PMto6PM}
            onChange={setArrival12PMto6PM}
          />
          12PM to 6PM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={arrivalAfter6PM}
            onChange={setArrivalAfter6PM}
          />
          After 6PM
        </div>
      </div>

      <h3>RTC TYPE</h3>
      <div className="checkbox-area">
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={superFast}
            onChange={setSuperFast}
          />
          SUPER FAST
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={fast}
            onChange={setFast}
          />
          FAST
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={ordinary}
            onChange={setOrdinary}
          />
          ORDINARY
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={limitedStop}
            onChange={setLimitedStop}
          />
          LIMITED STOP
        </div>
      </div>
    </div>
  );
}

export default Filters;
