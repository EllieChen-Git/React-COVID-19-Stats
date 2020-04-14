import React, { useState } from "react";
import axios from "axios";
import "./HistoricalDataForm.css";

const locations = ["Australia", "Taiwan"];
const categories = ["Cases", "Deaths", "Recovered"];

const HistoricalDataForm = () => {
  const [location, setLocation] = useState("australia");
  // React Hook: const [state, setState] = useState(initialState);
  // 'location' is the current state
  // 'setLocation' is a function that update a piece of the state
  // 'australia'  is the initial state
  const [category, setCategory] = useState("cases");
  const [data, setData] = useState([]);

  const requestData = (location, category) => {
    axios
      .get(`https://corona.lmao.ninja/v2/historical/${location}?lastdays=all`)
      .then((res) => {
        const historicalData = res.data.timeline[category];
        console.log(historicalData);
        setData(historicalData || []);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="historical-data">
      <h1>Check Historical Data</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestData(location, category.toLowerCase());
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
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HistoricalDataForm;
