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
  const [tick, setTick] = useState("1");

  useEffect(() => {
    setInterval(() => {
      setTick(tick + 1);
    }, 1000);
  }, [tick]);

  const grabHourByTimezone = (offset) => {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const offsetHour = new Date(utc + 3600000 * offset).getHours();
    return ("0" + offsetHour).slice(-2);
  };

  const taipeiHour = grabHourByTimezone("+8");
  const sydneyHour = grabHourByTimezone("+10"); // Consider daylight saving in the future
  const mins = ("0" + new Date().getMinutes()).slice(-2);
  const seconds = ("0" + new Date().getSeconds()).slice(-2);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="app-container">
        <h1>COVID-19 Data Visualisation: Australia & Taiwan</h1>
        <div className="clock-container">
          <Clock
            icon="season_autumn.svg" // Consider changing icon based on seasons in the future
            timezone={"Sydney - Australia"}
            hours={sydneyHour}
            minutes={mins}
            seconds={seconds}
          />
          <Clock
            icon="season_spring.svg" // Consider changing icon based on seasons in the future
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
        <p>*Comparsion table data from Worldometers</p>
        <p>**Historial data from Johns Hopkins University</p>
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
