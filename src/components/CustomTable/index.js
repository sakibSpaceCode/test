import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size, status) {
  const density = population / size;
  return { name, code, population, size, density, status };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263, "Completed"),
  createData("China", "CN", 1403500365, 9596961, "Completed"),
  createData("Italy", "IT", 60483973, 301340, "Pending"),
  createData("United States", "US", 327167434, 9833520, "Completed"),
  createData("Canada", "CA", 37602103, 9984670, "Completed"),
  createData("Australia", "AU", 25475400, 7692024, "Completed"),
  createData("Germany", "DE", 83019200, 357578, "Pending"),
  createData("Ireland", "IE", 4857000, 70273, "Completed"),
  createData("Mexico", "MX", 126577691, 1972550, "Pending"),
  createData("Japan", "JP", 126317000, 377973, "Completed"),
  createData("France", "FR", 67022000, 640679, "Completed"),
  createData("United Kingdom", "GB", 67545757, 242495, "Pending"),
  createData("Russia", "RU", 146793744, 17098246, "Completed"),
  createData("Nigeria", "NG", 200962417, 923768, "Pending"),
  createData("Brazil", "BR", 210147125, 8515767, "Pending"),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: (props) => props.height || 300,
    padding: "20px 25px",
  },
  completed: {
    backgroundColor: "#29D60D",
    padding: "8px 15px",
    borderRadius: "10px",
    color: "#FFFFFF",
  },
  pending: {
    backgroundColor: "#FBB752",
    padding: "8px 23px",
    borderRadius: "10px",
    color: "#FFFFFF",
  },
});

export default function CustomTable({ height }) {
  const classes = useStyles({ height: height });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer className={classes.container}>
      <Table aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  minWidth: column.minWidth,
                  background: "#F4F7FE",
                  color: "#618EFF",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return value === "Completed" ? (
                      <TableCell key={column.id} align={column.align}>
                        <span className={classes.completed}>{value}</span>
                      </TableCell>
                    ) : value === "Pending" ? (
                      <TableCell key={column.id} align={column.align}>
                        <span className={classes.pending}> {value}</span>
                      </TableCell>
                    ) : (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
