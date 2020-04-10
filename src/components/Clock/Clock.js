import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1
    };
  }

  tick = () => {
    this.setState({ time: this.state.time + 1 });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { minutes, hours, seconds, timezone, icon } = this.props;

    return (
      <div className="container" onLoad={this.tick}>
        <h3 className="label">{timezone}</h3>
        <p className="label">
          {hours}:{minutes}:{seconds}
        </p>

        <div
          className="clock-face"
          style={{ backgroundImage: `url(/${icon})` }}
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
  }
}

export default Clock;
