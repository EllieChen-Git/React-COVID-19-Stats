import React, { useState, useEffect } from "react";
import "./App.css";
import Clock from "./components/Clock";
import ComparisonTable from "./components/ComparisonTable";
import HistoricalDataForm from "./components/Form/HistoricalDataForm";
import LineGraph from "./components/Graph/LineGraph";
import SocialButtons from "./components/SocialButtons";
import ErrorBoundary from "./components/Shared/ErrorBoundary";
import ThemeContext from "./components/Shared/ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  const [tick, setTick] = useState(1);
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const seasons = {
    1: ["summer", "winter"],
    2: ["summer", "winter"],
    3: ["autumn", "spring"],
    4: ["autumn", "spring"],
    5: ["autumn", "spring"],
    6: ["winter", "summer"],
    7: ["winter", "summer"],
    8: ["winter", "summer"],
    9: ["spring", "autumn"],
    10: ["spring", "autumn"],
    11: ["spring", "autumn"],
    12: ["summer", "winter"],
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTick(tick + 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [tick]);

  const grabHourByTimezone = (offset) => {
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const offsetHour = new Date(utc + 3600000 * offset).getHours();
    return ("0" + offsetHour).slice(-2);
  };

  const taipeiHour = grabHourByTimezone("+8");
  const sydneyHour = grabHourByTimezone("+10");
  const mins = ("0" + new Date().getMinutes()).slice(-2);
  const seconds = ("0" + new Date().getSeconds()).slice(-2);

  return (
    <ThemeContext.Provider value={theme}>
      <h1>COVID-19 Data Visualisation: Australia & Taiwan</h1>
      <div className="clock-container">
        <Clock
          icon={"season_" + seasons[currentMonth][0] + ".svg"}
          timezone={"Sydney - Australia"}
          hours={sydneyHour}
          minutes={mins}
          seconds={seconds}
        />
        <Clock
          icon={"season_" + seasons[currentMonth][1] + ".svg"}
          timezone={"Taipei - Taiwan"}
          hours={taipeiHour}
          minutes={mins}
          seconds={seconds}
        />
      </div>

      <ComparisonTable />
      <LineGraph />
      <HistoricalDataForm />
      <SocialButtons />
      <div className="container">
        <footer>
          &copy;
          {new Date().getFullYear()} Ellie Chen - All Rights Reserved
        </footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default function AppErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
}
