import React from "react";
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

const data = [
  {
    date: "31 Jan",
    AUS: 0,
    TW: 0,
  },
  {
    date: "15 Feb",
    AUS: 0,
    TW: 0,
  },
  {
    date: "29 Feb",
    AUS: 0,
    TW: 1,
  },
  {
    date: "15 Mar",
    AUS: 3,
    TW: 1,
  },
  {
    date: "31 Mar",
    AUS: 18,
    TW: 5,
  },
  {
    date: "15 Apr",
    AUS: 63,
    TW: 6,
  },
];

const Graph = () => {
  return (
    <div className="graph-container">
      <h1>Death Cases</h1>
      <ResponsiveContainer width="50%" height={480}>
        <LineChart
          data={data}
          margin={{
            top: 50,
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

export default Graph;
