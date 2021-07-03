import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "../../styles/Statistics/_tableStatistics";

export default function BasicTable({ data }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} align="center">
              Won
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Lost
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Direct Hit
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Hit
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Miss
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data[1]?.map((row) => (
            <TableCell
              className={classes.tableCell}
              component="th"
              scope="row"
              align="center"
            >
              {row === null ? 0 : row}
            </TableCell>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
