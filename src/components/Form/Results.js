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
            <TableCell style={{ color: theme, fontWeight: "bold" }}>
              Date
            </TableCell>
            <TableCell style={{ color: theme, fontWeight: "bold" }}>
              Number
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((entry) => {
            return (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
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
