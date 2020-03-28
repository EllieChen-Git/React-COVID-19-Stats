import React, { Component } from "react";
import Clock from "./components/Clock";

class App extends Component {
  state = {
    time: 1
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => {
        return { time: state.time + 1 };
      });
    }, 1000);
  }

  render() {
    const date = new Date();
    return (
      <div>
        <h1>COVID-19 Data Visualisation: Australia & Taiwan</h1>

        <Clock
          icon="season_autumn.svg" // temp hardcoded
          timezone={"Australia/Sydney"}
          hours={date.getHours()}
          minutes={("0" + date.getMinutes()).slice(-2)}
          seconds={("0" + date.getSeconds()).slice(-2)}
        />

        <Clock
          icon="season_spring.svg" // temp hardcoded
          timezone={"Asia/Taipei"}
          hours={date.getHours() - 3} //// temp hardcoded (daylight saving)
          minutes={("0" + date.getMinutes()).slice(-2)}
          seconds={("0" + date.getSeconds()).slice(-2)}
        />
      </div>
    );
  }
}

export default App;
