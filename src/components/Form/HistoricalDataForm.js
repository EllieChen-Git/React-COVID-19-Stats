import React, { useState } from "react";
import axios from "axios";
import useDropdown from "./useDropdown";

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

const locations = ["Australia", "Taiwan"];
const dataset = ["Cases", "Deaths", "Recovered"];

const HistoricalDataForm = () => {
  // useDropdown = (label, defaultState, options)
  const [location, LocationDropdwon] = useDropdown(
    "Location",
    "Australia",
    locations
  );
  const [data, DataDropdown] = useDropdown("Data", "cases", dataset);
  const [dates, updateDates] = useState([]);
  const [date, DateDropdown] = useDropdown("Date", "", dates);

  return (
    <div>
      <h1>Historial Data</h1>
      <form>
        <fieldset>
          <legend>Select Options</legend>
          <LocationDropdwon />
          <DataDropdown />
          <DateDropdown />
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HistoricalDataForm;
