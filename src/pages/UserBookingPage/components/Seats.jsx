import "./Seats.css";
import { GiSteeringWheel } from "react-icons/gi";

function Seats({ bus, selectedSeats, setSelectedSeats, bookedSeats }) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const onClick = (index) => {
    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== index));
    } else {
      setSelectedSeats([...selectedSeats, index]);
    }
  };

  return (
    <div className="bus-seat-selector">
      <div className="steering-div">
        <GiSteeringWheel size={40} transform="rotate(-90)"></GiSteeringWheel>
        <div className="seats-spacer"></div>
        {bookedSeats.includes(50) ? (
          <div className="bus-seat-box-booked"></div>
        ) : selectedSeats.includes(50) ? (
          <div
            className="bus-seat-box-selected"
            onClick={() => onClick(50)}
          ></div>
        ) : (
          <div className="bus-seat-box" onClick={() => onClick(50)}></div>
        )}
        {bookedSeats.includes(51) ? (
          <div className="bus-seat-box-booked"></div>
        ) : selectedSeats.includes(51) ? (
          <div
            className="bus-seat-box-selected"
            onClick={() => onClick(51)}
          ></div>
        ) : (
          <div className="bus-seat-box" onClick={() => onClick(51)}></div>
        )}
      </div>
      <div className="bus-seat-selector-seats-div">
        <div className="bus-seats-row">
          {arr.map((num, index) => {
            if (bookedSeats.includes(index + 1)) {
              return (
                <div className="bus-seat-box-booked" key={index + 1}></div>
              );
            } else if (selectedSeats.includes(index + 1)) {
              return (
                <div
                  className="bus-seat-box-selected"
                  key={index + 1}
                  onClick={() => onClick(index + 1)}
                ></div>
              );
            } else {
              return (
                <div
                  className="bus-seat-box"
                  key={index + 1}
                  onClick={() => onClick(index + 1)}
                ></div>
              );
            }
          })}
        </div>
        <div className="bus-seats-row">
          {arr.map((num, index) => {
            if (bookedSeats.includes(index + 11)) {
              return (
                <div className="bus-seat-box-booked" key={index + 11}></div>
              );
            } else if (selectedSeats.includes(index + 11)) {
              return (
                <div
                  className="bus-seat-box-selected"
                  key={index + 11}
                  onClick={() => onClick(index + 11)}
                ></div>
              );
            } else {
              return (
                <div
                  className="bus-seat-box"
                  key={index + 11}
                  onClick={() => onClick(index + 11)}
                ></div>
              );
            }
          })}
        </div>
        <div className="bus-seats-row">
          {arr.map((num, index) => {
            if (bookedSeats.includes(index + 21)) {
              return (
                <div className="bus-seat-box-booked" key={index + 21}></div>
              );
            } else if (selectedSeats.includes(index + 21)) {
              return (
                <div
                  className="bus-seat-box-selected"
                  key={index + 21}
                  onClick={() => onClick(index + 21)}
                ></div>
              );
            } else {
              return (
                <div
                  className="bus-seat-box"
                  key={index + 21}
                  onClick={() => onClick(index + 21)}
                ></div>
              );
            }
          })}
        </div>
        <div className="center-seat-div">
          <div className="seats-spacer"></div>
          {bookedSeats.includes(31) ? (
            <div className="bus-seat-box-booked"></div>
          ) : selectedSeats.includes(31) ? (
            <div
              className="bus-seat-box-selected"
              onClick={() => onClick(31)}
            ></div>
          ) : (
            <div className="bus-seat-box" onClick={() => onClick(31)}></div>
          )}
        </div>
        <div className="bus-seats-row">
          <div className="seats-spacer"></div>
          {arr.map((num, index) => {
            if (index != 0)
              if (bookedSeats.includes(index + 31)) {
                return (
                  <div className="bus-seat-box-booked" key={index + 31}></div>
                );
              } else if (selectedSeats.includes(index + 31)) {
                return (
                  <div
                    className="bus-seat-box-selected"
                    key={index + 31}
                    onClick={() => onClick(index + 31)}
                  ></div>
                );
              } else {
                return (
                  <div
                    className="bus-seat-box"
                    key={index + 31}
                    onClick={() => onClick(index + 31)}
                  ></div>
                );
              }
          })}
        </div>
        <div className="bus-seats-row">
          <div className="seats-spacer"></div>
          {arr.map((num, index) => {
            if (index != 0)
              if (bookedSeats.includes(index + 40)) {
                return (
                  <div className="bus-seat-box-booked" key={index + 40}></div>
                );
              } else if (selectedSeats.includes(index + 40)) {
                return (
                  <div
                    className="bus-seat-box-selected"
                    key={index + 40}
                    onClick={() => onClick(index + 40)}
                  ></div>
                );
              } else {
                return (
                  <div
                    className="bus-seat-box"
                    key={index + 40}
                    onClick={() => onClick(index + 40)}
                  ></div>
                );
              }
          })}
        </div>
      </div>
    </div>
  );
}

export default Seats;