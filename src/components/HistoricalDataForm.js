import React, { useState } from "react";
import axios from "axios";

const dataTest = () => {
  axios
    .get(`https://corona.lmao.ninja/v2/historical/taiwan?lastdays=all`)
    .then((res) => {
      const historicalCases = res.data.timeline;
      console.log(historicalCases);
    })
    .catch(function (error) {
      console.log(error);
    });
};

dataTest();

const locations = [
  {
    value: "aus",
    label: "Australia",
  },
  {
    value: "tw",
    label: "Taiwan",
  },
];

const dataset = [
  {
    value: "cases",
    label: "cases",
  },
  {
    value: "deaths",
    label: "deaths",
  },
  {
    value: "recovered",
    label: "recovered",
  },
];

const HistoricalDataForm = () => {
  const [location, setLocation] = useState("Australia");
  const [data, setData] = useState("cases");
  const [date, updateDate] = useState("");
  const [dates, updateDates] = useState([]);

  return (
    <div>
      <h1>Form </h1>
      <form>
        <fieldset>
          <legend>Select Options</legend>
          <label htmlFor="location">
            Location:
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onBlur={(e) => setLocation(e.target.value)}
            >
              {locations.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="data">
            Data:
            <select
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              onBlur={(e) => setData(e.target.value)}
            >
              {dataset.map((data) => (
                <option key={data.value} value={data.value}>
                  {data.label}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="date">
            Date:
            <select
              disabled={!dates.length}
              id="date"
              value={date}
              onChange={(e) => updateDate(e.target.value)}
              onBlur={(e) => updateDate(e.target.value)}
            >
              <option />
              {dates.map((date) => (
                <option key={date.value} value={date.value}>
                  {date.label}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default HistoricalDataForm;
