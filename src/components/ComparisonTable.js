import React, { Component } from "react";
import covid from "novelcovid";

export default class ComparisonTable extends Component {
  state = {
    twCases: 0,
    twDeaths: 0,
    twRecovered: 0,
    twActive: 0,
    twCritical: 0,
    twCasesPerMillion: 0,
    twDeathsPerMillion: 0,
    ausCases: 0,
    ausDeaths: 0,
    ausRecovered: 0,
    ausActive: 0,
    ausCritical: 0,
    ausCasesPerMillion: 0,
    ausDeathsPerMillion: 0
  };

  componentDidMount() {
    (async () => {
      const twData = await covid.getCountry({ country: "Taiwan" });
      const twCases = twData.cases;
      const twRecovered = twData.recovered;
      const twDeaths = twData.deaths;
      const twActive = twData.active;
      const twCritical = twData.critical;
      const twCasesPerMillion = twData.casesPerOneMillion;
      const twDeathsPerMillion = twData.deathsPerOneMillion;
      console.log(twData);
      return this.setState({
        twCases,
        twRecovered,
        twDeaths,
        twActive,
        twCritical,
        twCasesPerMillion,
        twDeathsPerMillion
      });
    })();

    (async () => {
      const ausData = await covid.getCountry({ country: "Australia" });
      const ausCases = ausData.cases;
      const ausRecovered = ausData.recovered;
      const ausDeaths = ausData.deaths;
      const ausActive = ausData.active;
      const ausCritical = ausData.critical;
      const ausCasesPerMillion = ausData.casesPerOneMillion;
      const ausDeathsPerMillion = ausData.deathsPerOneMillion;
      console.log(ausData);
      return this.setState({
        ausCases,
        ausRecovered,
        ausDeaths,
        ausActive,
        ausCritical,
        ausCasesPerMillion,
        ausDeathsPerMillion
      });
    })();
  }

  render() {
    return (
      <div>
        <h1>Comparison Table</h1>
        <p>twCases: {this.state.twCases}</p>
        <p>twRecovered: {this.state.twRecovered}</p>
        <p>twDeaths: {this.state.twDeaths}</p>
        <p>twActive: {this.state.twActive}</p>
        <p>twCritical: {this.state.twCritical}</p>
        <p>twCasesPerMillion: {this.state.twCasesPerMillion}</p>
        <p>twDeathsPerMillion}: {this.state.twDeathsPerMillion}</p>
        <p>---</p>
        <p>ausCases: {this.state.ausCases}</p>
        <p>ausRecovered: {this.state.ausRecovered}</p>
        <p>ausDeaths: {this.state.ausDeaths}</p>
        <p>ausActive: {this.state.ausActive}</p>
        <p>ausCritical: {this.state.ausCritical}</p>
        <p>ausCasesPerMillion: {this.state.ausCasesPerMillion}</p>
        <p>ausDeathsPerMillion}: {this.state.ausDeathsPerMillion}</p>
      </div>
    );
  }
}
