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
                      <RemoveIcon />
                      <Typography>Delete User</Typography>
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
                      <AddIcon />
                      <Typography>Add User</Typography>
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
                  <tr>
                    <td>Employee Status:</td>
                    <td className={classes.firstBtn}>
                      <CustomButton>All</CustomButton>
                    </td>
                    <td>
                      <CustomButton>Yes</CustomButton>
                    </td>
                    <td>
                      <CustomButton>No</CustomButton>
                    </td>
                  </tr>
                  <tr>
                    <td>Superuser Status:</td>
                    <td className={classes.firstBtn}>
                      <CustomButton>All</CustomButton>
                    </td>
                    <td>
                      <CustomButton>Yes</CustomButton>
                    </td>
                    <td>
                      <CustomButton>No</CustomButton>
                    </td>
                  </tr>
                  <tr>
                    <td>Active:</td>
                    <td className={classes.firstBtn}>
                      <CustomButton>All</CustomButton>
                    </td>
                    <td>
                      <CustomButton>Yes</CustomButton>
                    </td>
                    <td>
                      <CustomButton>No</CustomButton>
                    </td>
                  </tr>
                </table>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BorderPaper>
        <CustomTable />
      </BorderPaper>
    </>
  );
};
const CustomButton = ({ children }) => {
  const classes = useStyles();
  return (
    <Button className={classes.btns} variant="contained" color="primary">
      <span className={classes.btnText}>{children}</span>
    </Button>
  );
};
const CustomPaper = ({ children }) => {
  const classes = useStyles();
  return <Paper className={classes.papers}>{children}</Paper>;
};

export default EmployeesPage;
