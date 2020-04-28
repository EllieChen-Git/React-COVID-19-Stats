import React, { useContext } from "react";
import { graphData } from "./GraphData";
import ThemeContext from "./../Shared/ThemeContext";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineGraph = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div className="graph-container">
      <h1 style={{ color: theme }}>Death Cases</h1>
      <ResponsiveContainer width="80%" height={480}>
        <LineChart
          data={graphData}
          margin={{
            right: 50,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip separator=" - " animationEasing={"linear"} />
          <Legend verticalAlign="top" height={36} iconSize={20} />
          <Line
            type="monotone"
            dataKey="TW"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="AUS"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
