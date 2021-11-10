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

// import "../../Styles/projectDetails.scss";

const ProjectDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );

  useEffect(() => {
    dispatch(getData("project"));
    return () => {
      dispatch(clearData());
    };
  }, []);
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
  return (
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
            <Grid container justify="space-between" className={classes.root}>
              {data.map((item) => (
                <Grid item xs={3} className={classes.cardContainer}>
                  <Grid container direction="column">
                    <Grid className={classes.img} item>
                      <img style={{ width: "68px" }} src={Image} alt="" />
                    </Grid>
                    <Grid item>
                      <p className={classes.projectName}>{item.projectName}</p>
                    </Grid>
                    <Grid item>
                      <Divider variant="middle" />
                    </Grid>
                    <Grid item>
                      <p className={classes.jobId}>{item.jobId}</p>
                    </Grid>
                    <Grid item className={classes.managerName}>
                      {item.managerName}
                    </Grid>
                    <Grid item className={classes.progress}>
                      <CustomizedProgressBars />
                    </Grid>
                    <Grid item className={classes.days}>
                      {item.days}
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
        // onCompleteClick={handleCompleteButtonClick}
        // onSaveClick={handleCompleteButtonClick}
        // isSave={isEdit || isClone ? true : false}
        // loading={isEdit ? putLoading : postLoading}
        // error={errorMessage}
        // disabled={inputs?.length === 0}>
      >
        <ProjectDetailsForm />
      </CustomDialog>
    </>
  );
};

export default ProjectDetails;
