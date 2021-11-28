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
import {
  clearData,
  getData,
  getDetails,
} from "../../redux/actions/commonGetDataActions";
import useForm from "../../hooks/useForm";
import {
  clearDropDownResponse,
  clearPostResponse,
  clearPutResponse,
  getDropdown,
  postFormData,
  putFormData,
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
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [alertOpen2, setAlertOpen2] = useState(false);

  const [errorMessage, setErrorMessage] = React.useState("");
  const [nextClick, setNextClick] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [rowData, setRowData] = useState({});
  const [search, setSearch] = useState("");
  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );
  const { detailsLoading, detailsError, detailsResponseData } = useSelector(
    (state) => state.getDetails
  );
  useEffect(() => {
    setRowData(detailsResponseData);
  }, [detailsResponseData]);
  const { putLoading, putResponse, putError } = useSelector(
    (state) => state.putFields
  );
  console.log(rowData, "row");
  isEdit &&
    mData?.fields?.forEach((field) => {
      let fieldValue = rowData[field.name];
      if (field.name === "brand_name") {
        field.value = rowData?.Job?.name;
        return;
      } else if (typeof fieldValue === "object" && field.name === "Name") {
        field.value = rowData?.Job?.name;
        return;
      } else if (typeof fieldValue === "object" && fieldValue !== null) {
        if (field.name === "Job") {
          field.value = fieldValue._id;
        }
      } else {
        field.value = rowData[field?.name];
      }
    });
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const submitCallback = (e) => {
    let object = {};

    mData?.fields?.map((m) => (object[m.name] = m.value));

    let json = JSON.stringify(object);

    if (isEdit) {
      dispatch(putFormData("project", json));
    } else {
      dispatch(postFormData("project", json));
    }
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
    return lastDate.diff(dayNow, "days");
  };
  const handleCardClick = (id) => {
    dispatch(getDetails("project", id));
    setIsEdit(true);
    setEditDialogOpen(true);
  };
  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setErrorMessage(null);
    resetFormData();
    setErrorMessage("");
    setIsEdit(false);
    // dispatch(clearDropDownResponse())
  };
  useEffect(() => {
    putResponse?.success === true && setAlertOpen2(true);
    putResponse?.success === true && dispatch(getData("project"));
    putResponse?.success === true && setEditDialogOpen(false);
    putResponse?.success === false && setEditDialogOpen(true);
    putError?.errorMessage && setErrorMessage(putError?.errorMessage);
    putResponse?.success === true && setIsEdit(false);
    putResponse?.success === true && resetFormData();
    putResponse?.success === true && setErrorMessage(null);
    putError?.errorMessage && dispatch(clearPutResponse());
    setTimeout(() => {
      dispatch(clearPutResponse());
    }, 3000);
  }, [putResponse, putError]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid
            container
            direction='column'
            style={{ padding: "20px 30px" }}
            spacing={2}>
            <Grid container direction='column'>
              <Grid item xs>
                <Grid container justify='space-between'>
                  <Grid item xs={6}>
                    <CustomSearch
                      value={search}
                      handleSearchDelete={handleSearchDelete}
                      handleChange={handleSearch}
                      handleSearch={handleSearchClick}
                      placeholder='Search to view'
                    />
                  </Grid>
                  <Grid item>
                    <Grid container justify='flex-end'>
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
                    <Grid
                      onClick={() => handleCardClick(item._id)}
                      item
                      xs={3}
                      className={classes.cardContainer}>
                      <Grid container direction='column'>
                        <Grid className={classes.img} item>
                          <img style={{ width: "68px" }} src={Image} alt='' />
                        </Grid>
                        <Grid item>
                          <p className={classes.projectName}>
                            {item?.Job?.name || "-"}
                          </p>
                        </Grid>
                        <Grid item>
                          <Divider variant='middle' />
                        </Grid>
                        <Grid item>
                          <p className={classes.jobId}>
                            {item?.Job?.Job || "-"}
                          </p>
                        </Grid>
                        <Grid item className={classes.managerName}>
                          {item?.Job?.project_manager || "-"}
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
            loading={postLoading}
            error={errorMessage}
            apiURL='project'
            setIsEdit={setIsEdit}
            setEditDialogOpen={setEditDialogOpen}
            json={JSON.stringify({ _id: rowData?._id })}
            resetFormData={resetFormData}
            disabled={inputs?.length === 0}>
            <FormContainer
              inputs={inputs}
              urlEndPoint='projectDepartment'
              onFormChange={onFormChange}
              handleEditChange={handleEditChange}
              //  rowData={rowData}
              handleDateChange={handleDateChange}
            />
          </CustomDialog>{" "}
          <CustomDialog
            title={`Edit Project Details`}
            open={editDialogOpen}
            onClose={handleEditDialogClose}
            onCancelClick={handleEditDialogClose}
            onNextClick={handleNextClick}
            nextClick={nextClick}
            setIsEdit={setIsEdit}
            // onCompleteClick={handleCompleteButtonClick}
            onSaveClick={handleCompleteButtonClick}
            // isSave={isAdd || isClone ? true : false}
            loading={putLoading}
            error={errorMessage}
            isEdit={isEdit}
            apiURL='project'
            json={JSON.stringify({ _id: rowData?._id })}
            disabled={inputs?.length === 0}
            resetFormData={resetFormData}
            setEditDialogOpen={setEditDialogOpen}>
            <FormContainer
              inputs={inputs}
              urlEndPoint='projectDetails'
              onFormChange={onFormChange}
              handleEditChange={handleEditChange}
              rowData={rowData}
              handleDateChange={handleDateChange}
              isEdit={isEdit}
            />
          </CustomDialog>
          {alertOpen && (
            <Alert
              open={alertOpen}
              message='Project details added successfully'
              duration={2000}
              onClose={() => setAlertOpen(false)}
              vertical={"bottom"}
              horizontal={"center"}
              severity='success'
              actions={false}
            />
          )}
          {alertOpen2 && (
            <Alert
              open={alertOpen2}
              message={`Project details updated successfully.`}
              duration={2000}
              onClose={() => setAlertOpen2(false)}
              vertical={"bottom"}
              horizontal={"center"}
              severity='success'
              actions={false}
            />
          )}
        </>
      )}
    </>
  );
};

export default ProjectDetails;
