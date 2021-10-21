import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import CustomSearch from "../../components/CustomSearch";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./style";
import BorderPaper from "../../components/BorderPaper";
import CustomTable from "../../components/CustomTable";

const RetroPlanPage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="space-between" spacing={8}>
        <Grid item xs={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <CustomSearch placeholder="Search for employees" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <CustomButton width="110px" variant="outlined">
                Add Retro Plan
              </CustomButton>
            </Grid>
            <Grid item>
              <CustomButton width="110px" variant="outlined">
                Import
              </CustomButton>
            </Grid>
            <Grid item>
              <CustomButton width="110px" variant="outlined">
                Export
              </CustomButton>
            </Grid>
            <Grid item>
              <CustomButton width="110px" variant="outlined">
                View in excel
              </CustomButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ marginTop: 30 }}>
        <BorderPaper>
          <CustomTable height={500} />
        </BorderPaper>
      </div>
    </>
  );
};
const CustomButton = ({ children, disabled, variant, width }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.btns}
      disabled={disabled}
      variant={variant}
      className={classes.btnText}
      color="primary"
      style={{
        backgroundColor: variant === "outlined" && "#fff",
        minWidth: width,
      }}
    >
      <span>{children}</span>
    </Button>
  );
};
const CustomPaper = ({ children }) => {
  const classes = useStyles();
  return <Paper className={classes.papers}>{children}</Paper>;
};

export default RetroPlanPage;
