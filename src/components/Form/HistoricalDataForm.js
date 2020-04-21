import React, { useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const locations = ["Australia", "Taiwan"];
const timeframes = ["7", "14", "21", "30", "all"];
const categories = ["Cases", "Deaths", "Recovered"];

const HistoricalDataForm = () => {
  const [location, setLocation] = useState("australia");
  // React Hook: const [state, setState] = useState(initialState);
  // 'location' is the current state
  // 'setLocation' is a function that update a piece of the state
  // 'australia'  is the initial state
  const [category, setCategory] = useState("cases");
  const [timeframe, setTimeframe] = useState("7");
  const [data, setData] = useState([]);

  const requestData = (location, category, timeframe) => {
    axios
      .get(
        `https://corona.lmao.ninja/v2/historical/${location}?lastdays=${timeframe}`
      )
      .then((res) => {
        const historicalData = res.data.timeline[category];
        return setData(historicalData || []);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="historical-data-container">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>Check Historical Data**</h1>
          <form
            className="historical-data-form"
            onSubmit={(e) => {
              e.preventDefault();
              requestData(location, category.toLowerCase(), timeframe);
            }}
          >
            <fieldset>
              <legend>Select Options</legend>

              <div>
                <label htmlFor="location">
                  Location:
                  <select
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onBlur={(e) => setLocation(e.target.value)}
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div>
                <label htmlFor="category">
                  Category:
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    onBlur={(e) => setCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="timeframe">
                  Timeframe:
                  <select
                    id="timeframe"
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    onBlur={(e) => setTimeframe(e.target.value)}
                  >
                    {timeframes.map((timeframe) => (
                      <option key={timeframe} value={timeframe}>
                        {`Past ${timeframe} days`}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </fieldset>
            <button>Submit</button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(data).map((value, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{value}</TableCell>
                      <TableCell>{data[value]}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default HistoricalDataForm;
