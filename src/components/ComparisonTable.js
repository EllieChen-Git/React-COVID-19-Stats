import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "./Shared/ThemeContext";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    createData("Active", ausActive, twActive, ausActive - twActive),
    createData(
      "Recovered",
      ausRecovered,
      twRecovered,
      ausRecovered - twRecovered
    ),
    createData("Deaths", ausDeaths, twDeaths, ausDeaths - twDeaths),
    createData("Total Cases", ausCases, twCases, ausCases - twCases),
    createData("Tests Conducted", ausTests, twTests, ausTests - twTests),
  ];

  return (
    <div className="container">
      <div className="comparison-table">
        <h1 style={{ color: theme }}>Comparison Table</h1>
        <TableContainer component={Paper} style={{ background: "#c4f0e7" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="left">
                  <strong>Australia</strong>
                </TableCell>
                <TableCell align="left">
                  <strong>Taiwan</strong>
                </TableCell>
                <TableCell align="left">
                  <strong>Difference</strong>
                </TableCell>
              </TableRow>
              <TableRow className="comparison-table__flag">
                <TableCell>
                  <strong>Flag</strong>
                </TableCell>
                <TableCell align="left">
                  <img
                    className="comparision-table__image"
                    src="./aus-flag.png"
                    alt="Australian Flag"
                  />
                </TableCell>
                <TableCell align="left">
                  <img
                    className="comparision-table__image"
                    src="./tw-flag.png"
                    alt="Taiwanese Flag"
                  />
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <strong>{row.name}</strong>
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
      </div>
    </div>
  );
};

export default ComparisonTable;
