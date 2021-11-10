import { Grid, Paper } from "@material-ui/core";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BorderPaper from "../../components/BorderPaper";
import CustomButton from "../../components/button";
import CustomSearch from "../../components/CustomSearch";
import CustomTable from "../../components/CustomTable";
import Loader from "../../components/loader";
import { clearData, getData } from "../../redux/actions/commonGetDataActions";
import { useStyles } from "./style";
import RetroTimeLine from "./timeline";

const RetroPlanPage = () => {
  const dispatch = useDispatch();

  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );

  useEffect(() => {
    dispatch(getData("retro_plan"));

    return () => {
      dispatch(clearData());
    };
  }, []);
  const classes = useStyles();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
              <CustomTable height={500} response={responseData} />
            </BorderPaper>
          </div>
        </>
      )}

      {/* <RetroTimeLine /> */}
    </>
  );
};

const CustomPaper = ({ children }) => {
  const classes = useStyles();
  return <Paper className={classes.papers}>{children}</Paper>;
};

export default RetroPlanPage;
