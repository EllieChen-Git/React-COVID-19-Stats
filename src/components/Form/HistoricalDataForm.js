import React, { useState } from "react";
import Results from "./Results";
import Pages from "./Pages";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

const locations = ["Australia", "Taiwan"];
const timeframes = ["10", "20", "30", "60", "all"];
const categories = ["Cases", "Deaths", "Recovered"];

const HistoricalDataForm = () => {
  const [location, setLocation] = useState("australia");
  const [category, setCategory] = useState("cases");
  const [timeframe, setTimeframe] = useState("10");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://corona.lmao.ninja/v2/historical/${location}?lastdays=${timeframe}`
    );
    const historicalData = res.data.timeline[category.toLowerCase()];
    setData(Object.entries(historicalData).reverse() || []);
    setLoading(false);
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const onPaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
              fetchData(location, category, timeframe);
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
        <Results data={currentData} loading={loading} />
        <Pages
          dataPerPage={dataPerPage}
          allData={data.length}
          paginate={onPaginate}
        />
      </Grid>
    </div>
  );
};

export default HistoricalDataForm;
