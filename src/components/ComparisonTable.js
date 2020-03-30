import React, { Component } from "react";
import covid from "novelcovid";
// import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650
//   }
// });

export default class ComparisonTable extends Component {
  // const classes = useStyles();

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
    ausDeathsPerMillion: 0,
    rows: []
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

  //   createData(category, tw, aus) {
  //     return { category, tw, aus };
  //   }

  render() {
    // this.setState({
    //   rows: [
    //     this.createData("Cases", this.state.twCases, this.state.ausCases),
    //     this.createData("Death", 237, 9.0, 37, 4.3),
    //     this.createData("Recovered", 262, 16.0, 24, 6.0),
    //     this.createData("Active", 305, 3.7, 67, 4.3),
    //     this.createData("Critical", 356, 16.0, 49, 3.9),
    //     this.createData("Cases per Million", 305, 3.7, 67, 4.3),
    //     this.createData("Death per Million", 356, 16.0, 49, 3.9)
    //   ]
    // });

    return (
      <div>
        <h1>Comparison Table</h1>
        {/* <div>
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
        </div> */}
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Statistics</TableCell>
                <TableCell align="left">Taiwan</TableCell>
                <TableCell align="left">Australia</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={"Cases"}>
                <TableCell component="th" scope="row">
                  {"Cases"}
                </TableCell>
                <TableCell align="left">{this.state.twCases}</TableCell>
                <TableCell align="left">{this.state.ausCases}</TableCell>
              </TableRow>
              <TableRow key={"Deaths"}>
                <TableCell component="th" scope="row">
                  {"Deaths"}
                </TableCell>
                <TableCell align="left">{this.state.twDeaths}</TableCell>
                <TableCell align="left">{this.state.ausDeaths}</TableCell>
              </TableRow>
              <TableRow key={"CasesPM"}>
                <TableCell component="th" scope="row">
                  {"Cases per Million"}
                </TableCell>
                <TableCell align="left">
                  {this.state.twCasesPerMillion}
                </TableCell>
                <TableCell align="left">
                  {this.state.ausCasesPerMillion}
                </TableCell>
              </TableRow>
              <TableRow key={"DeathsPM"}>
                <TableCell component="th" scope="row">
                  {"Deaths per Million"}
                </TableCell>
                <TableCell align="left">
                  {this.state.twDeathsPerMillion}
                </TableCell>
                <TableCell align="left">
                  {this.state.ausDeathsPerMillion}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
