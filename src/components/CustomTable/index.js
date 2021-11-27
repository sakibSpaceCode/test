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
import moment from "moment";
import CancelIcon from "@material-ui/icons/Cancel";
import HelpIcon from "@material-ui/icons/Help";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import NoData from "../../common/Assets/noData.png";
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
    align: "center",
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
    padding: "0px 25px",
    borderRadius: 25,
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

export default function CustomTable({
  height,
  response,
  local,
  setRowData,
  setEditDialogOpen,
}) {
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
    <>
      {local ? (
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    align={"center"}
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
                .map((row, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      {columns.map((column, i) => {
                        const value = row[column.id];
                        return value === "Completed" ? (
                          <TableCell key={i} align={"center"}>
                            <span className={classes.completed}>{value}</span>
                          </TableCell>
                        ) : value === "Pending" ? (
                          <TableCell key={i} align={"center"}>
                            <span className={classes.pending}> {value}</span>
                          </TableCell>
                        ) : (
                          <TableCell key={i} align={"center"}>
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
      ) : (
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {response?.data?.header?.map((column, i) => (
                  <TableCell
                    key={i}
                    align={"center"}
                    style={{
                      minWidth: 200,
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
              {response?.data?.data?.map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {response?.data?.header?.map((column) => {
                      let value = row[column.key];
                      if (
                        column.key === "start_date" ||
                        column.key === "first_set_submission" ||
                        column.key === "final_approval" ||
                        column.key === "first_set_submission" ||
                        column.key === "Production_Start_Date" ||
                        column.key === "Drawing_Start_Date" ||
                        column.key === "Production_Completion_Date" ||
                        column.key === "drawing_start" ||
                        column.key === "first_mr" ||
                        column.key === "procurement_first_mr" ||
                        column.key === "drawing_approvel" ||
                        column.key === "Second_mr" ||
                        column.key === "procurement_second_mr" ||
                        column.key === "sub_assembly" ||
                        column.key === "structure_inspection" ||
                        column.key === "paint" ||
                        column.key === "final" ||
                        column.key === "delivery" ||
                        column.key === "Install" ||
                        column.key === "handover" ||
                        column.key === "Structure" ||
                        column.key === "Completion_Date" ||
                        column.key === "date"
                      ) {
                        value = value
                          ? moment(value).format("DD-MMM-YYYY")
                          : "-";
                      } else if (column.key.includes(".")) {
                        let keys = column.key.split(".");
                        value = row[keys[0]]?.[keys[1]]
                          ? row[keys[0]]?.[keys[1]]
                          : "-";
                      }
                      return column.key === "is_active" && value === true ? (
                        <TableCell key={column.key} align={"center"}>
                          <span className={classes.completed}>Completed</span>
                        </TableCell>
                      ) : column.key === "is_active" && value === false ? (
                        <TableCell key={column.key} align={"center"}>
                          <span className={classes.pending}> Pending</span>
                        </TableCell>
                      ) : column.key === "Material_Received" &&
                        value === true ? (
                        <TableCell key={column.key} align={"center"}>
                          <CheckCircleIcon
                            style={{ fill: "rgba(41, 214, 13, 1)" }}
                          />
                        </TableCell>
                      ) : column.key === "Material_Received" &&
                        value === false ? (
                        <TableCell key={column.key} align={"center"}>
                          <CancelIcon
                            style={{
                              fill: "  rgba(255, 93, 83, 1)",
                            }}
                          />
                        </TableCell>
                      ) : column.key === "Material_Received" &&
                        value === null ? (
                        <TableCell key={column.key} align={"center"}>
                          <HelpIcon style={{ fill: "rgba(251, 183, 82, 1)" }} />
                        </TableCell>
                      ) : column.key === "Quality_Inspection" &&
                        value === true ? (
                        <TableCell key={column.key} align={"center"}>
                          <CheckCircleIcon
                            style={{ fill: "rgba(41, 214, 13, 1)" }}
                          />
                        </TableCell>
                      ) : column.key === "Quality_Inspection" &&
                        value === false ? (
                        <TableCell key={column.key} align={"center"}>
                          <CancelIcon
                            style={{ fill: " rgba(255, 93, 83, 1)" }}
                          />
                        </TableCell>
                      ) : column.key === "Quality_Inspection" &&
                        value === null ? (
                        <TableCell key={column.key} align={"center"}>
                          <HelpIcon style={{ fill: "rgba(251, 183, 82, 1)" }} />
                        </TableCell>
                      ) : (
                        <TableCell
                          style={{
                            cursor:
                              column.key === "Job.Job" ||
                              (column.key === "Job_No" && "pointer"),
                            fontWeight:
                              column.key === "Job.Job" ||
                              (column.key === "Job_No" && "bold"),
                          }}
                          onClick={() => {
                            if (
                              column.key === "Job.Job" ||
                              column.key === "Job_No"
                            ) {
                              if (setRowData) setRowData(row);
                              if (setEditDialogOpen) {
                                setEditDialogOpen(true);
                              }
                            }
                          }}
                          key={column.key}
                          align={"center"}
                        >
                          {value?.toString() || "-"}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
