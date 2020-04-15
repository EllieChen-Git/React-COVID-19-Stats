import React, { Component } from "react";
import covid from "novelcovid";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class ComparisonTable extends Component {
  state = {
    twCases: 0,
    twDeaths: 0,
    twFlag: null,
    twTodayCases: 0,
    twTodayDeaths: 0,
    twTests: 0,
    ausCases: 0,
    ausDeaths: 0,
    ausFlag: null,
    ausTodayCases: 0,
    ausTodayDeaths: 0,
    ausTests: 0,
    lastUpdated: null,
  };

  createData(name, australia, taiwan, difference) {
    return { name, australia, taiwan, difference };
  }

  componentDidMount() {
    (async () => {
      const twData = await covid.getCountry({ country: "Taiwan" });
      const twCases = twData.cases;
      const twFlag = twData.countryInfo.flag;
      const twDeaths = twData.deaths;
      const twTodayCases = twData.todayCases;
      const twCritical = twData.critical;
      const twTodayDeaths = twData.todayDeaths;
      const twTests = twData.tests;
      return this.setState({
        twCases,
        twFlag,
        twDeaths,
        twTodayCases,
        twCritical,
        twTodayDeaths,
        twTests,
      });
    })();

    (async () => {
      const ausData = await covid.getCountry({ country: "Australia" });
      const ausCases = ausData.cases;
      const ausFlag = ausData.countryInfo.flag;
      const ausDeaths = ausData.deaths;
      const ausTodayCases = ausData.todayCases;
      const ausCritical = ausData.critical;
      const ausTodayDeaths = ausData.todayDeaths;
      const ausTests = ausData.tests;
      const lastUpdated = new Date(ausData.updated).toString();
      return this.setState({
        ausCases,
        ausFlag,
        ausDeaths,
        ausTodayCases,
        ausCritical,
        ausTodayDeaths,
        ausTests,
        lastUpdated,
      });
    })();
  }

  render() {
    const {
      twCases,
      twDeaths,
      twFlag,
      twTodayCases,
      twTodayDeaths,
      twTests,
      ausCases,
      ausDeaths,
      ausFlag,
      ausTodayCases,
      ausTodayDeaths,
      ausTests,
      lastUpdated,
    } = this.state;

    const rows = [
      this.createData("Cases", ausCases, twCases, ausCases - twCases),
      this.createData(
        "Today's Cases",
        ausTodayCases,
        twTodayCases,
        ausTodayCases - twTodayCases
      ),
      this.createData("Deaths", ausDeaths, twDeaths, ausDeaths - twDeaths),
      this.createData(
        "Today's Deaths",
        ausTodayDeaths,
        twTodayDeaths,
        ausTodayDeaths - twTodayDeaths
      ),
      this.createData("Tests Conducted", ausTests, twTests, ausTests - twTests),
    ];

    return (
      <div className="comparison-table-container">
        <h1>Comparison Table*</h1>
        <Grid container>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Satistics</TableCell>
                    <TableCell align="left">Australia</TableCell>
                    <TableCell align="left">Taiwan</TableCell>
                    <TableCell align="left">Difference</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Flag</TableCell>
                    <TableCell align="left">
                      <img
                        style={{ width: "150px", height: "90px" }} // ratio 5:3 (temp inline styling)
                        src={ausFlag}
                        alt="Australia Flag"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <img
                        style={{ width: "150px", height: "90px" }} // ratio 5:3 (temp inline styling)
                        src={twFlag}
                        alt="Taiwan Flag"
                      />
                    </TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.australia}</TableCell>
                      <TableCell align="left">{row.taiwan}</TableCell>
                      <TableCell align="left">{row.difference}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <p>Last updated: {lastUpdated}</p> {/* Move to App.js or Footer */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ComparisonTable;
