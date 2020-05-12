import React, { useState, useContext } from "react";
import Results from "./Results";
import Pages from "./Pages";
import axios from "axios";
// import Grid from "@material-ui/core/Grid";
import ThemeContext from "./../Shared/ThemeContext";

const HistoricalDataForm = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [location, setLocation] = useState("australia");
  const [category, setCategory] = useState("cases");
  const [timeframe, setTimeframe] = useState("10");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);

  const locations = ["Australia", "Taiwan"];
  const timeframes = ["10", "20", "30", "60", "all"];
  const categories = ["Cases", "Deaths", "Recovered"];

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

  return (
    <div className="container">
      <h1 style={{ color: theme }}>Historical Data</h1>
      <div className="historical-data">
        <form
          className="historical-data__form col"
          onSubmit={(e) => {
            e.preventDefault();
            fetchData(location, category, timeframe);
          }}
        >
          <fieldset>
            <legend>Selection Criteria</legend>

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
            <div>
              <label htmlFor="theme">
                Theme Colour:
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  onBlur={(e) => setTheme(e.target.value)}
                >
                  <option value="peru">Peru</option>
                  <option value="darkblue">Dark Blue</option>
                  <option value="darkgreen">Dark Green</option>
                </select>
              </label>
            </div>
          </fieldset>

          <button style={{ backgroundColor: theme, color: "white" }}>
            Submit
          </button>
        </form>

        <div className="historical-data__result col">
          <Results data={currentData} loading={loading} />

          {/* Only displays pagination when there's data */}
          {data.length > 0 && (
            <Pages
              count={Math.ceil(data.length / dataPerPage)}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoricalDataForm;
