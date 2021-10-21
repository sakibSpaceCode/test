import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import CustomSearch from "../../components/CustomSearch";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./style";
import BorderPaper from "../../components/BorderPaper";
import CustomTable from "../../components/CustomTable";

const EmployeesPage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="space-between" spacing={8}>
        <Grid item xs={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <CustomSearch placeholder="Search for employees" />
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={6}>
                  <CustomPaper>
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <RemoveIcon fontSize="large" />
                      <Typography
                        style={{ fontWeight: "bold" }}
                        variant="subtitle1"
                      >
                        Delete User
                      </Typography>
                    </div>
                  </CustomPaper>
                </Grid>
                <Grid item xs={6}>
                  <CustomPaper>
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AddIcon fontSize="large" />
                      <Typography
                        style={{ fontWeight: "bold" }}
                        variant="subtitle1"
                        fontWeight="bold"
                      >
                        Add User
                      </Typography>
                    </div>
                  </CustomPaper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="flex-end">
            <Grid item>
              <Paper className={classes.filterpaper}>
                <Typography className={classes.filterBy}>Filter By</Typography>
                <table className={classes.filterTable}>
                  <tr style={{ marginBottom: 10 }}>
                    <td>Employee Status:</td>
                    <td className={classes.firstBtn}>
                      <CustomButton>All</CustomButton>
                    </td>
                    <td>
                      <CustomButton disabled>Yes</CustomButton>
                    </td>
                    <td>
                      <CustomButton disabled>No</CustomButton>
                    </td>
                  </tr>
                  <tr style={{ marginBottom: 10 }}>
                    <td>Superuser Status:</td>
                    <td className={classes.firstBtn}>
                      <CustomButton>All</CustomButton>
                    </td>
                    <td>
                      <CustomButton disabled>Yes</CustomButton>
                    </td>
                    <td>
                      <CustomButton disabled>No</CustomButton>
                    </td>
                  </tr>
                  <tr style={{ marginBottom: 10 }}>
                    <td>Active:</td>
                    <td className={classes.firstBtn}>
                      <CustomButton>All</CustomButton>
                    </td>
                    <td>
                      <CustomButton disabled>Yes</CustomButton>
                    </td>
                    <td>
                      <CustomButton disabled>No</CustomButton>
                    </td>
                  </tr>
                </table>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ marginTop: 30 }}>
        <BorderPaper>
          <CustomTable height={420} />
        </BorderPaper>
      </div>
    </>
  );
};
const CustomButton = ({ children, disabled }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.btns}
      disabled={disabled}
      variant="contained"
      color="primary"
    >
      <span className={classes.btnText}>{children}</span>
    </Button>
  );
};
const CustomPaper = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper
      elevation={0}
      className={classes.papers}
      style={{ cursor: "pointer" }}
    >
      {children}
    </Paper>
  );
};

export default EmployeesPage;
