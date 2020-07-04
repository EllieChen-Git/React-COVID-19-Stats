import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ThemeContext from "./../Shared/ThemeContext";

const Results = ({ data, loading }) => {
  const [theme] = useContext(ThemeContext);
  if (loading) {
    return <h2 style={{ color: theme }}>Loading...</h2>; // can do a spinner afterwards
  }
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: theme }}>
              <strong>Date</strong>
            </TableCell>
            <TableCell style={{ color: theme }}>
              <strong>Number</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((entry) => {
            // Convert date format into Australian style
            const date = entry[0];
            const dateArray = date.split("/");
            const day = ("0" + dateArray[1]).slice(-2);
            const month = ("0" + dateArray[0]).slice(-2);
            const year = "20" + dateArray[2];

            return (
              <TableRow key={date}>
                <TableCell>{`${day}/${month}/${year}`}</TableCell>
                <TableCell>{entry[1]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Results;
