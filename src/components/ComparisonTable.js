import React, { Component } from "react";
import axios from "axios";

// End point (country): https://corona.lmao.ninja/countries/taiwan
// End point (historical data): https://corona.lmao.ninja/v2/historical/australia

export default class ComparisonTable extends Component {
  state = {
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0
  };

  componentDidMount() {
    axios
      .get(`https://corona.lmao.ninja/countries/taiwan`)
      .then(res => {
        const cases = res.data.cases;
        const todayCases = res.data.todayCases;
        const deaths = res.data.deaths;
        const todayDeaths = res.data.todayDeaths;
        console.log(res.data);
        this.setState({ cases, todayCases, deaths, todayDeaths });
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    return (
      <div>
        <h1>Comparison Table</h1>
        <p>Cases: {this.state.cases}</p>
        <p>Today Cases: {this.state.todayCases}</p>
        <p>Deaths: {this.state.deaths}</p>
        <p>TodayDeaths: {this.state.todayDeaths}</p>
      </div>
    );
  }
}
