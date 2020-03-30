import React, { Component } from "react";
import Clock from "./components/Clock";
import ComparisonTable from "./components/ComparisonTable";

class App extends Component {
  // state = {
  //   time: 1
  // };

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState(state => {
  //       return { time: state.time + 1 };
  //     });
  //   }, 1000);
  // }

  grabHourByTimezone(offset) {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const offsetHour = new Date(utc + 3600000 * offset).getHours();
    return ("0" + offsetHour).slice(-2);
  }

  render() {
    const taipeiHour = this.grabHourByTimezone("+8");
    const sydneyHour = this.grabHourByTimezone("+11");
    const mins = ("0" + new Date().getMinutes()).slice(-2);
    const seconds = ("0" + new Date().getSeconds()).slice(-2);

    return (
      <div>
        <h1>COVID-19 Data Visualisation: Australia & Taiwan</h1>
        <Clock
          icon="season_autumn.svg" // temp hardcoded
          timezone={"Sydney - Australia"}
          hours={sydneyHour}
          minutes={mins}
          seconds={seconds}
        />
        <Clock
          icon="season_spring.svg" // temp hardcoded
          timezone={"Taipei - Taiwan"}
          hours={taipeiHour}
          minutes={mins}
          seconds={seconds}
        />
        <ComparisonTable />
      </div>
    );
  }
}

export default App;
