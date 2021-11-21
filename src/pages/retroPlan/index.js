import { Grid, Paper } from "@material-ui/core";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BorderPaper from "../../components/BorderPaper";
import CustomButton from "../../components/button";
import CustomDialog from "../../components/CustomDialog";
import CustomSearch from "../../components/CustomSearch";
import CustomTable from "../../components/CustomTable";
import Loader from "../../components/loader";
import {
  clearPostResponse,
  getDropdown,
  postFormData,
} from "../../redux/actions/commonFormActions";
import { clearData, getData } from "../../redux/actions/commonGetDataActions";
import AddRetroPlanForm from "./addRetroPlanForm";
import { useStyles } from "./style";
import RetroTimeLine from "./timeline";
import Alert from "../../components/alert/alert.container";

const RetroPlanPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    Job: "",
    name: "",
    survey: "",
    drawing_start: "",
    first_revision: "",
    first_mr: "",
    procurement_first_mr: "",
    drawing_approvel: "",
    Second_mr: "",
    procurement_second_mr: "",
    sub_assembly: "",
    structure_inspection: "",
    paint: "",
    paint_inspection: "",
    first_final_inspection: "",
    second_final_inspection: "",
    final: "",
    packing: "",
    dispatch: "",
    delivery: "",
    hoarding: "",
    civil_mep_works: "",
    Install: "",
    handover: "",
    project: "",
  });
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    setDialogOpen(true);
    dispatch(getDropdown("job_card"));
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
    setErrorMessage(null);
    setFormData({});
  };
  const handleCompleteButtonClick = () => {
    dispatch(postFormData("retro_plan", formData));
  };
  console.log(formData);

  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );
  const { postLoading, postResponse, postError } = useSelector(
    (state) => state.postFields
  );
  useEffect(() => {
    postResponse?.success === true && setAlertOpen(true);
    postResponse?.success === true && dispatch(getData("retro_plan"));
    postResponse?.success === true && setDialogOpen(false);
    postError && dispatch(clearPostResponse());
    postError && setErrorMessage(postError);
    setTimeout(() => {
      dispatch(clearPostResponse());
    }, 3000);
  }, [postResponse, postError]);
  useEffect(() => {
    dispatch(getData("retro_plan"));
    return () => {
      dispatch(clearData());
    };
  }, []);
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
                  <CustomButton
                    width="110px"
                    variant="outlined"
                    onClick={handleOpenDialog}
                  >
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
      <CustomDialog
        title={`Add Retro Plan`}
        open={dialogOpen}
        onClose={handleDialogClose}
        onCancelClick={handleDialogClose}
        // onNextClick={handleNextClick}
        // onCompleteClick={handleCompleteButtonClick}
        onSaveClick={handleCompleteButtonClick}
        // isSave={isEdit || isClone ? true : false}
        loading={postLoading}
        error={errorMessage}
        // disabled={inputs?.length === 0}>
      >
        <AddRetroPlanForm formData={formData} setFormData={setFormData} />
      </CustomDialog>
      {alertOpen && (
        <Alert
          open={alertOpen}
          message={`Retro Plan added successfully.`}
          duration={2000}
          onClose={() => setAlertOpen(false)}
          vertical={"bottom"}
          horizontal={"center"}
          severity="success"
          actions={false}
        />
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
