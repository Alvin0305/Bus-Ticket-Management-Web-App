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

  function handleDepartureBefore6AM() {
    setDepartureBefore6AM(!departureBefore6AM);
  }

  function handleDeparture6AMto12PM() {
    setDeparture6AMto12PM(!departure6AMto12PM);
  }

  function handleDeparture12PMto6PM() {
    setDeparture12PMto6PM(!departure12PMto6PM);
  }

  function handleDepartureAfter6PM() {
    setDepartureAfter6PM(!departureAfter6PM);
  }

  function handleSeater() {
    setSeater(!seater);
  }

  function handleSleaper() {
    setSleaper(!sleaper);
  }

  function handleAC() {
    setAC(!AC);
  }

  function handleNonAC() {
    setNonAC(!nonAC);
  }

  function handleArrivalBefore6AM() {
    setArrivalBefore6AM(!arrivalBefore6AM);
  }

  function handleArrival6AMto12PM() {
    setArrival6AMto12PM(!arrival6AMto12PM);
  }

  function handleArrival12PMto6PM() {
    setArrival12PMto6PM(!arrival12PMto6PM);
  }

  function handleArrivalAfter6PM() {
    setArrivalAfter6PM(!arrivalAfter6PM);
  }

  function handleOrdinary() {
    setOrdinary(!ordinary);
  }

  function handleFast() {
    setFast(!fast);
  }

  function handleSuperFast() {
    setSuperFast(!superFast);
  }

  function handleLimitedStop() {
    setLimitedStop(!limitedStop);
  }

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
            onChange={handleDepartureBefore6AM}
          />
          Before 6AM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={departure6AMto12PM}
            onChange={handleDeparture6AMto12PM}
          />
          6AM to 12PM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={departure12PMto6PM}
            onChange={handleDeparture12PMto6PM}
          />
          12PM to 6PM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={departureAfter6PM}
            onChange={handleDepartureAfter6PM}
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
            onChange={handleSeater}
          />
          SEATER
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={sleaper}
            onChange={handleSleaper}
          />
          SLEAPER
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={AC}
            onChange={handleAC}
          />
          AC
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={nonAC}
            onChange={handleNonAC}
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
            onChange={handleArrivalBefore6AM}
          />
          Before 6AM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={arrival6AMto12PM}
            onChange={handleArrival6AMto12PM}
          />
          6AM to 12PM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={arrival12PMto6PM}
            onChange={handleArrival12PMto6PM}
          />
          12PM to 6PM
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={arrivalAfter6PM}
            onChange={handleArrivalAfter6PM}
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
            onChange={handleSuperFast}
          />
          SUPER FAST
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={fast}
            onChange={handleFast}
          />
          FAST
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={ordinary}
            onChange={handleOrdinary}
          />
          ORDINARY
        </div>
        <div>
          <input
            type="checkbox"
            className="filter-checkbox"
            checked={limitedStop}
            onChange={handleLimitedStop}
          />
          LIMITED STOP
        </div>
      </div>
    </div>
  );
}

export default Filters;
