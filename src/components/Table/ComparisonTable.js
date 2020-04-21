import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// const locations = ["Australia", "Taiwan"];
// const categories = ["cases", "recovered", "active", "deaths", "tests"];

// const ComparisonTable = () => {
//   const [location, setLocation] = useState("Australia");
//   const [category, setCategory] = useState("cases");
//   const [data, setData] = useState([]);

//   const requestData = () => {
//     axios
//       .get(`https://corona.lmao.ninja/v2/countries/taiwan`)
//       .then((res) => {
//         const locationData = res.data;
//         return setData(locationData || []);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="comparison-table-container">
//       <h1>Comparison Table*</h1>
//       {data}
//     </div>
//   );
// };

class ComparisonTable extends Component {
  state = {
    twCases: 0,
    twDeaths: 0,
    twTests: 0,
    // "cases": 6625,
    // "recovered": 4258,
    // "active": 2296,
    // "deaths": 71,
    // "tests": 431734,
    ausCases: 0,
    ausDeaths: 0,
    ausTests: 0,
    lastUpdated: null,
  };

  createData(name, australia, taiwan, difference) {
    return { name, australia, taiwan, difference };
  }

  componentDidMount() {
    const twData = axios
      .get("https://corona.lmao.ninja/v2/countries/taiwan")
      .then((res) => {
        console.log(res.data);
        return this.setState({
          twCases: res.data.cases,
          twDeaths: res.data.deaths,
          twTests: res.data.tests,
          lastUpdated: new Date(res.data.updated).toString(),
        });
      })
      .catch((err) => console.log(err));

    const ausData = axios
      .get("https://corona.lmao.ninja/v2/countries/australia")
      .then((res) => {
        console.log(res.data);
        return this.setState({
          ausCases: res.data.cases,
          ausDeaths: res.data.deaths,
          ausTests: res.data.tests,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {
      twCases,
      twDeaths,
      twFlag,
      twTests,
      ausCases,
      ausDeaths,
      ausFlag,
      ausTests,
      lastUpdated,
    } = this.state;

    const rows = [
      this.createData("Cases", ausCases, twCases, ausCases - twCases),
      this.createData("Deaths", ausDeaths, twDeaths, ausDeaths - twDeaths),
      this.createData("Tests Conducted", ausTests, twTests, ausTests - twTests),
    ];

    const placeholderImg = "http://placecorgi.com/150/90";

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
                        src={ausFlag || placeholderImg}
                        alt="Australia Flag"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <img
                        style={{ width: "150px", height: "90px" }} // ratio 5:3 (temp inline styling)
                        src={twFlag || placeholderImg}
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
                      <TableCell align="left">
                        {row.difference || "Data Not Available"}
                      </TableCell>
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
