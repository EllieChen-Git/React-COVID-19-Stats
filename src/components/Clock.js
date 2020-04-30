import React from "react";

const Clock = (props) => {
  const { minutes, hours, seconds, timezone, icon } = props;

  return (
    <div className="clock">
      <h3 className="clock-label">{timezone}</h3>
      <p className="clock-label">
        {hours}:{minutes}:{seconds}
      </p>

      <div
        className="clock-face-container"
        style={{ backgroundImage: `url(/${icon})` }}
      >
        <div className="clock-face">
          <div className="clock-hours-container">
            <div
              className="clock-hours"
              style={{
                transform: `rotateZ(${hours * 30 + minutes / 2}deg)`,
              }}
            ></div>
          </div>
          <div className="clock-minutes-container">
            <div
              className="clock-minutes"
              style={{ transform: `rotateZ(${minutes * 6}deg)` }}
            ></div>
            <div className="clock-seconds-container">
              <div
                className="clock-seconds"
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
