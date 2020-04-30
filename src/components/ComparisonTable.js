import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "./Shared/ThemeContext";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// API endpoint: https://corona.lmao.ninja/v2/countries/{location}

const ComparisonTable = () => {
  const [theme] = useContext(ThemeContext);
  const [twData, setTwData] = useState({});
  const [ausData, setAusData] = useState({});

  useEffect(() => {
    const fetchTwData = async () => {
      const res = await axios.get(
        "https://corona.lmao.ninja/v2/countries/taiwan"
      );
      setTwData(res.data || {});
    };
    const fetchAusData = async () => {
      const res = await axios.get(
        "https://corona.lmao.ninja/v2/countries/australia"
      );
      setAusData(res.data || {});
    };
    fetchAusData();
    fetchTwData();
  }, []);

  const {
    cases: twCases,
    deaths: twDeaths,
    recovered: twRecovered,
    active: twActive,
    tests: twTests,
    updated: lastUpdated,
  } = twData;

  const {
    cases: ausCases,
    deaths: ausDeaths,
    recovered: ausRecovered,
    active: ausActive,
    tests: ausTests,
  } = ausData;

  const createData = (name, australia, taiwan, difference) => {
    return { name, australia, taiwan, difference };
  };

  const rows = [
    createData("Total Cases", ausCases, twCases, ausCases - twCases),
    createData("- Active", ausActive, twActive, ausActive - twActive),
    createData(
      "- Recovered",
      ausRecovered,
      twRecovered,
      ausRecovered - twRecovered
    ),
    createData("- Deaths", ausDeaths, twDeaths, ausDeaths - twDeaths),
    createData("Tests Conducted", ausTests, twTests, ausTests - twTests),
  ];

  return (
    <div className="comparison-table-container">
      <h1 style={{ color: theme }}>Comparison Table</h1>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">Australia</TableCell>
                  <TableCell align="left">Taiwan</TableCell>
                  <TableCell align="left">Difference</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>Flag</TableCell>
                  <TableCell align="left">
                    <img
                      style={{ width: "150px", height: "90px" }}
                      src="./aus-flag.png"
                      alt="Australia Flag"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <img
                      style={{ width: "150px", height: "90px" }}
                      src="./tw-flag.png"
                      alt="Taiwan Flag"
                    />
                  </TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.australia}</TableCell>
                    <TableCell align="left">{row.taiwan}</TableCell>
                    <TableCell align="left">
                      {row.difference || "Loading..."}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <p>Last updated: {new Date(lastUpdated).toString()}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ComparisonTable;
