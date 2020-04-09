import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

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

const HistoricalDataForm = () => {
  const [location, setLocation] = useState("Australia");
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  return (
    <form noValidate autoComplete="off">
      <h1>Form </h1>
      <div>
        <TextField
          id="standard-select-location"
          select
          label="Location"
          value={location}
          onChange={handleChange}
          helperText="Please select location"
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export default HistoricalDataForm;
