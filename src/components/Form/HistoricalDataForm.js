import React, { useState } from "react";
import axios from "axios";
import useDropdown from "./useDropdown";
import "./HistoricalDataForm.css";

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
const categories = ["Cases", "Deaths", "Recovered"];

const HistoricalDataForm = () => {
  // useDropdown = (label, defaultState, options)
  const [location, LocationDropdwon] = useDropdown(
    "Location: ",
    "Australia",
    locations
  );
  const [category, CategoryDropdown] = useDropdown(
    "Category: ",
    "cases",
    categories
  );
  const [dates, updateDates] = useState([]);
  const [date, DateDropdown] = useDropdown("Date: ", "", dates);

  return (
    <div className="historical-data">
      <h1>Historical Data</h1>
      <form>
        <fieldset>
          <legend>Select Options</legend>
          <div>
            <LocationDropdwon />
          </div>
          <div>
            <CategoryDropdown />
          </div>
          <div>
            <DateDropdown />
          </div>
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HistoricalDataForm;
