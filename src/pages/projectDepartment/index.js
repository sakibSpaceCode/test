import { Divider, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
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
  getDropdown,
  postFormData,
} from "../../redux/actions/commonFormActions";
import FormContainer from "../commonPage/FormContainer";
import moment from "moment";

// import "../../Styles/projectDetails.scss";

const ProjectDetails = (props) => {
  const mData = props.data.length > 1 ? props.data[1] : props.data[0];
  const classes = useStyles();
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
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
  ] = useForm(mData?.fields, submitCallback);
  useEffect(() => {
    dispatch(getData("project"));
    dispatch(getDropdown("job_card"));
    return () => {
      dispatch(clearData());
      dispatch(clearDropDownResponse());
    };
  }, []);
  // const handleEditDialog = () => {
  //   setEditDialogOpen(true);
  // };
  const handleEditDialogClose = () => {
    //  setEditDialogOpen(false);
    setErrorMessage(null);
    resetFormData();
    setErrorMessage("");
    // dispatch(clearDropDownResponse())
  };
  const handleCompleteButtonClick = () => {
    setSubmit("nextClick");
  };

  const data = [
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
    {
      projectName: "Project Name",
      jobId: "Job ID",
      managerName: "Project Manager Name",
      progress: "30",
      days: "15 days left",
    },
  ];
  const daysLeft = (day) => {
    const dayNow = moment(Date.now());
    const lastDate = moment(day);
    return dayNow.diff(lastDate, "days");
  };
  return (
    <>
      {loading || (
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
                    <CustomSearch placeholder={`Search  to view`} />
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
                <Grid
                  container
                  justify="space-between"
                  className={classes.root}
                >
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
                          <p className={classes.jobId}>{item?.Job || "-"}</p>
                        </Grid>
                        <Grid item className={classes.managerName}>
                          {item?.Project_Manager}
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
            // onNextClick={handleNextClick}
            onCompleteClick={handleCompleteButtonClick}
            onSaveClick={handleCompleteButtonClick}
            // isSave={isEdit || isClone ? true : false}
            // loading={isEdit ? putLoading : postLoading}
            error={errorMessage}
            // disabled={inputs?.length === 0}>
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
        </>
      )}
    </>
  );
};

export default ProjectDetails;
