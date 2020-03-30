import React from "react";
import "./Clock.css";

const Clock = props => {
  const minutes = props.minutes;
  const hours = props.hours;
  const seconds = props.seconds;

  return (
    <div className="container">
      <h3 className="label">{props.timezone}</h3>
      <p className="label">
        {hours}:{minutes}:{seconds}
      </p>

      <div
        className="clock-face"
        style={{ backgroundImage: `url(/${props.icon})` }}
      >
        <div className="clock">
          <div className="hours-container">
            <div
              className="hours"
              style={{ transform: `rotateZ(${hours * 30 + minutes / 2}deg)` }}
            ></div>
          </div>
          <div className="minutes-container">
            <div
              className="minutes"
              style={{ transform: `rotateZ(${minutes * 6}deg)` }}
            ></div>
            <div className="seconds-container">
              <div
                className="seconds"
                style={{ transform: `rotateZ(${seconds * 6}deg)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;