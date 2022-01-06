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
  clearPutResponse,
  getDropdown,
  postFormData,
  putFormData,
} from "../../redux/actions/commonFormActions";
import {
  clearData,
  getData,
  getDetails,
} from "../../redux/actions/commonGetDataActions";
import AddRetroPlanForm from "./addRetroPlanForm";
import { useStyles } from "./style";
import RetroTimeLine from "./timeline";
import Alert from "../../components/alert/alert.container";
import useForm from "../../hooks/useForm";
import FormContainer from "../commonPage/FormContainer";
import { useHistory } from "react-router-dom";

const RetroPlanPage = (props) => {
  const history = useHistory();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [alertOpen2, setAlertOpen2] = useState(false);

  const [errorMessage, setErrorMessage] = React.useState("");
  const [nextClick, setNextClick] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [search, setSearch] = useState("");
  const [addPermission, setAddPermission] = useState(false);
  const [editPermission, setEditPermission] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [checked, setChecked] = useState(false);
  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );
  const { detailsLoading, detailsError, detailsResponseData } = useSelector(
    (state) => state.getDetails
  );
  const mData = props.data.length > 1 ? props.data[1] : props.data[0];
  const label = mData.label;
  const urlEndPoint = mData.urlEndPoint.substr(1);
  const apiURL = mData.apiUrl;
  useEffect(() => {
    setRowData(detailsResponseData);
  }, [detailsResponseData]);
  const { putLoading, putResponse, putError } = useSelector(
    (state) => state.putFields
  );

  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    setDialogOpen(true);
    dispatch(getDropdown("job_card"));
  };
  const onRetroClick = () => {
    history.push(`/dashboard/retro-plan/${rowData._id}`);
  };

  const { postLoading, postResponse, postError } = useSelector(
    (state) => state.postFields
  );

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

  const submitCallback = (e) => {
    let object = {};

    mData?.fields?.map((m) => (object[m.name] = m.value));
    if (isEdit) {
      object._id = rowData._id;
    }
    let json = JSON.stringify(object);

    if (isEdit) {
      dispatch(putFormData(apiURL, json));
    } else {
      dispatch(postFormData(apiURL, json));
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
    dispatch(getData("retro_plan"));
    return () => {
      dispatch(clearData());
    };
  }, []);
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
  React.useEffect(() => {
    userInfo?.data?.permissions?.map((val) => {
      if (val.codename == "retro_plan/add") {
        setAddPermission(true);
      }
      if (val.codename == "retro_plan/add") {
        setEditPermission(true);
      }
    });
  }, []);
  const classes = useStyles();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchClick = () => {
    dispatch(getData("retro_plan", search));
  };
  const handleSearchDelete = () => {
    setSearch("");
    dispatch(getData("retro_plan"));
  };
  const handleEditDialog = () => {
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
    postResponse?.success === true && setAlertOpen(true);
    postResponse?.success === true && dispatch(getData("retro_plan"));
    postResponse?.success === true && setDialogOpen(false);
    postResponse?.success === true && resetFormData();
    postError && dispatch(clearPostResponse());
    postError && setErrorMessage(postError);
    setTimeout(() => {
      dispatch(clearPostResponse());
    }, 3000);
  }, [postResponse, postError]);
  useEffect(() => {
    putResponse?.success === true && setAlertOpen2(true);
    putResponse?.success === true && dispatch(getData(apiURL));
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
          <Grid container justifyContent='space-between' spacing={8}>
            <Grid item xs={6}>
              <Grid container direction='column' spacing={2}>
                <Grid item xs={12}>
                  <CustomSearch
                    value={search}
                    handleSearchDelete={handleSearchDelete}
                    handleChange={handleSearch}
                    handleSearch={handleSearchClick}
                    placeholder='Search to view'
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justifyContent='flex-end' spacing={2}>
                <Grid item>
                  <CustomButton
                    width='110px'
                    variant='outlined'
                    onClick={() => addPermission && handleOpenDialog()}>
                    Add Retro Plan
                  </CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton width='110px' variant='outlined'>
                    Import
                  </CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton width='110px' variant='outlined'>
                    Export
                  </CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton width='110px' variant='outlined'>
                    View in excel
                  </CustomButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ marginTop: 30 }}>
            <BorderPaper>
              <CustomTable
                setEditDialogOpen={editPermission && handleEditDialog}
                height={500}
                setRowData={setRowData}
                response={editPermission && responseData}
              />
            </BorderPaper>
          </div>
        </>
      )}
      <CustomDialog
        title={`Add Retro Plan`}
        open={dialogOpen}
        onClose={handleDialogClose}
        onCancelClick={handleDialogClose}
        onNextClick={handleNextClick}
        onCompleteClick={handleCompleteButtonClick}
        onSaveClick={handleCompleteButtonClick}
        loading={postLoading}
        error={errorMessage}
        apiURL={apiURL}
        retroWaterFall={true}
        setIsEdit={setIsEdit}
        setEditDialogOpen={setEditDialogOpen}
        json={JSON.stringify({ _id: rowData?._id })}
        resetFormData={resetFormData}
        disabled={inputs?.length === 0}
        onRetroClick={onRetroClick}>
        <FormContainer
          inputs={inputs}
          urlEndPoint={urlEndPoint}
          onFormChange={onFormChange}
          handleEditChange={handleEditChange}
          //  rowData={rowData}
          handleDateChange={handleDateChange}
          noProjectName={false}
          setProjectName={setProjectName}
          projectName={projectName}
          setChecked={setChecked}
          checked={checked}
        />
      </CustomDialog>{" "}
      <CustomDialog
        title={`Edit Retro Plan`}
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
        apiURL={apiURL}
        json={JSON.stringify({ _id: rowData?._id })}
        disabled={inputs?.length === 0}
        resetFormData={resetFormData}
        setEditDialogOpen={setEditDialogOpen}>
        <FormContainer
          inputs={inputs}
          urlEndPoint={urlEndPoint}
          onFormChange={onFormChange}
          handleEditChange={handleEditChange}
          rowData={rowData}
          handleDateChange={handleDateChange}
          isEdit={isEdit}
          setProjectName={setProjectName}
          projectName={projectName}
          setChecked={setChecked}
          checked={checked}
        />
      </CustomDialog>
      {alertOpen && (
        <Alert
          open={alertOpen}
          message='Retro Plan added successfully'
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
          message={`Retro Plan updated successfully.`}
          duration={2000}
          onClose={() => setAlertOpen2(false)}
          vertical={"bottom"}
          horizontal={"center"}
          severity='success'
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
