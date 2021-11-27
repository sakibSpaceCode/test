import { Divider, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CustomButton from "../../components/button";
import CustomDialog from "../../components/CustomDialog/index";
import { useStyles } from "./style";
import Image from "../../common/Assets/dashboardImage/paint.png";
import CustomizedProgressBars from "./projectprogressBar";
import ProjectDetailsForm from "./projectDetailsForm";
import CustomSearch from "../../components/CustomSearch";
import { useDispatch, useSelector } from "react-redux";
import { clearData, getData } from "../../redux/actions/commonGetDataActions";
import useForm from "../../hooks/useForm";
import {
  clearDropDownResponse,
  clearPostResponse,
  getDropdown,
  postFormData,
} from "../../redux/actions/commonFormActions";
import FormContainer from "../commonPage/FormContainer";
import moment from "moment";
import Alert from "../../components/alert/alert.container";
import Loader from "../../components/loader";

// import "../../Styles/projectDetails.scss";

const ProjectDetails = (props) => {
  const mData = props.data.length > 1 ? props.data[1] : props.data[0];
  const classes = useStyles();
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [nextClick, setNextClick] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [rowData, setRowData] = useState({});
  const [search, setSearch] = useState("");

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );
  console.log(responseData?.data?.["data"]);
  const submitCallback = (e) => {
    let object = {};

    mData?.fields?.map((m) => (object[m.name] = m.value));

    let json = JSON.stringify(object);

    dispatch(postFormData("project", json));
  };
  const [
    inputs,
    onFormChange,
    handleEditChange,
    setSubmit,
    resetFormData,
    handleDateChange,
  ] = useForm(mData?.fields, submitCallback, rowData, setRowData, setNextClick);
  useEffect(() => {
    dispatch(getData("project"));
    dispatch(getDropdown("retro_plan"));
    return () => {
      dispatch(clearData());
      dispatch(clearDropDownResponse());
    };
  }, []);
  // const handleEditDialog = () => {
  //   setEditDialogOpen(true);
  // };
  const handleNextClick = () => {
    setNextClick(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
    setErrorMessage(null);
    resetFormData();
    setErrorMessage("");
    // dispatch(clearDropDownResponse())
  };
  const handleCompleteButtonClick = () => {
    setSubmit(nextClick);
  };
  useEffect(() => {
    nextClick && setSubmit(nextClick);
  }, [nextClick]);
  const { postLoading, postResponse, postError } = useSelector(
    (state) => state.postFields
  );
  useEffect(() => {
    postResponse?.success === true && setAlertOpen(true);

    // postResponse?.success === true && dispatch(getData(apiURL));
    if (!nextClick) {
      postResponse?.success === false && setDialogOpen(true);
      postResponse?.success === true && setDialogOpen(false);
    } else {
      postResponse?.success === false && setDialogOpen(true);
      postResponse?.success === true && setDialogOpen(true);
    }
    postResponse?.success === true && resetFormData();

    postError && dispatch(clearPostResponse());
    postError && setErrorMessage(postError);
    setTimeout(() => {
      dispatch(clearPostResponse());
    }, 3000);
  }, [postResponse, postError, nextClick]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchClick = () => {
    dispatch(getData("project", search));
  };
  const handleSearchDelete = () => {
    setSearch("");
    dispatch(getData("project"));
  };

  const daysLeft = (day) => {
    if (day == null) {
      return "Unkown";
    }
    const dayNow = moment(Date.now());
    const lastDate = moment(day);
    return dayNow.diff(lastDate, "days");
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid
            container
            direction="column"
            style={{ padding: "20px 30px" }}
            spacing={2}
          >
            <Grid container direction="column">
              <Grid item xs>
                <Grid container justify="space-between">
                  <Grid item xs={6}>
                    <CustomSearch
                      value={search}
                      handleSearchDelete={handleSearchDelete}
                      handleChange={handleSearch}
                      handleSearch={handleSearchClick}
                      placeholder="Search to view"
                    />
                  </Grid>
                  <Grid item>
                    <Grid container justify="flex-end">
                      <Grid item xs>
                        <CustomButton onClick={handleOpenDialog}>
                          Add Project Details
                        </CustomButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid container spacing={4} className={classes.root}>
                  {responseData?.data?.["data"].map((item) => (
                    <Grid item xs={3} className={classes.cardContainer}>
                      <Grid container direction="column">
                        <Grid className={classes.img} item>
                          <img style={{ width: "68px" }} src={Image} alt="" />
                        </Grid>
                        <Grid item>
                          <p className={classes.projectName}>
                            {item?.Project_Name}
                          </p>
                        </Grid>
                        <Grid item>
                          <Divider variant="middle" />
                        </Grid>
                        <Grid item>
                          <p className={classes.jobId}>
                            {item?.Job?.name || "-"}
                          </p>
                        </Grid>
                        <Grid item className={classes.managerName}>
                          {item?.Job?.project_manager}
                        </Grid>
                        <Grid item className={classes.progress}>
                          <CustomizedProgressBars />
                        </Grid>
                        <Grid item className={classes.days}>
                          {daysLeft(item?.Delivery_Date)} days left
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <CustomDialog
            title={`Add Project Details`}
            open={dialogOpen}
            onClose={handleDialogClose}
            onCancelClick={handleDialogClose}
            onNextClick={handleNextClick}
            onCompleteClick={handleCompleteButtonClick}
            onSaveClick={handleCompleteButtonClick}
            // isSave={isEdit || isClone ? true : false}
            // loading={isEdit ? putLoading : postLoading}
            error={errorMessage}
            disabled={inputs?.length === 0}
          >
            <FormContainer
              inputs={inputs}
              urlEndPoint={props.urlEndPoint}
              onFormChange={onFormChange}
              handleEditChange={handleEditChange}
              //  rowData={rowData}
              handleDateChange={handleDateChange}
            />
          </CustomDialog>{" "}
          {alertOpen && (
            <Alert
              open={alertOpen}
              message="Project details added successfully"
              duration={2000}
              onClose={() => setAlertOpen(false)}
              vertical={"bottom"}
              horizontal={"center"}
              severity="success"
              actions={false}
            />
          )}
        </>
      )}
    </>
  );
};

export default ProjectDetails;
