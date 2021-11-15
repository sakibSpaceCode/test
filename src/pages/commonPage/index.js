import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import CustomSearch from "../../components/CustomSearch";
import { useStyles } from "./style";
import BorderPaper from "../../components/BorderPaper";
import CustomTable from "../../components/CustomTable";
import CustomButton from "../../components/button";
import useForm from "../../hooks/useForm";
import FormContainer from "./FormContainer";
import CustomDialog from "../../components/CustomDialog";
import ImportDialog from "./importDialog";
import ExportDialog from "./exportDilog";
import { useDispatch, useSelector } from "react-redux";
import { clearData, getData } from "../../redux/actions/commonGetDataActions";
import {
  clearPostResponse,
  postFormData,
} from "../../redux/actions/commonFormActions";
import Alert from "../../components/alert/alert.container";
import Loader from "../../components/loader";

const CommonPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data } = props;
  const mData = data.length > 1 ? data[1] : data[0];
  const label = mData.label;
  const urlEndPoint = mData.urlEndPoint.substr(1);
  const apiURL = mData.apiUrl;
  let url = props.path.split("/")[2];

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rowData, setRowData] = useState({});
  const { loading, error, responseData } = useSelector(
    (state) => state.getData
  );

  const submitCallback = (e) => {
    let object = {};

    mData?.fields?.map((m) => (object[m.name] = m.value));

    let json = JSON.stringify(object);

    dispatch(postFormData(apiURL, json));
  };

  const [
    inputs,
    onFormChange,
    handleEditChange,
    setSubmit,
    resetFormData,
    handleDateChange,
  ] = useForm(mData?.fields, submitCallback);

  const handleEditDialog = () => {
    setEditDialogOpen(true);
  };
  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setErrorMessage(null);
    resetFormData();
    setErrorMessage("");
  };
  const handleCompleteButtonClick = () => {
    setSubmit("nextClick");
  };
  const handleImportDialog = () => {
    setImportDialogOpen(true);
  };
  const handleImportDialogClose = () => {
    setImportDialogOpen(false);
  };
  const handleExportDialog = () => {
    setExportDialogOpen(true);
  };
  const handleExportDialogClose = () => {
    setExportDialogOpen(false);
  };
  const { postLoading, postResponse, postError } = useSelector(
    (state) => state.postFields
  );
  useEffect(() => {
    dispatch(getData(apiURL));
    return () => {
      dispatch(clearData());
    };
  }, [apiURL]);

  useEffect(() => {
    postResponse?.success === true && setAlertOpen(true);

    postResponse?.success === true && dispatch(getData(apiURL));
    // if (!nextClick) {
    //   if (isClone) {
    //     postResponse?.success === false && setCloneDialogOpen(true);
    //   } else {
    //     postResponse?.success === false && setOpenAdd(true);
    //   }
    // }
    postResponse?.success === true && resetFormData();
    postResponse?.success === true && setEditDialogOpen(false);
    console.log(postError, "postError");
    postError && dispatch(clearPostResponse());
    postError && setErrorMessage(postError);
    setTimeout(() => {
      dispatch(clearPostResponse());
    }, 3000);
  }, [postResponse, postError]);
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid
            container
            alignItems='center'
            justify='space-between'
            spacing={8}>
            <Grid item xs={6}>
              <Grid container direction='column' spacing={2}>
                <Grid item xs={12}>
                  <CustomSearch placeholder={`Search ${label} to view`} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify='flex-end' spacing={2}>
                {props.path.split("/")[2] === "production" || (
                  <Grid item>
                    <CustomButton
                      width='150px'
                      variant='outlined'
                      onClick={handleEditDialog}>
                      {label === "Job Card" ? "Add Job Card" : "Add"}
                    </CustomButton>
                  </Grid>
                )}
                <Grid item>
                  <CustomButton
                    onClick={handleImportDialog}
                    width='150px'
                    variant='outlined'>
                    Import
                  </CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton
                    onClick={handleExportDialog}
                    width='150px'
                    variant='outlined'>
                    Export
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
          <CustomDialog
            title={`Add ${label}`}
            open={editDialogOpen}
            onClose={handleEditDialogClose}
            onCancelClick={handleEditDialogClose}
            // onNextClick={handleNextClick}
            // onCompleteClick={handleCompleteButtonClick}
            onSaveClick={handleCompleteButtonClick}
            // isSave={isEdit || isClone ? true : false}
            loading={ postLoading}
            error={errorMessage}
            // disabled={inputs?.length === 0}>
          >
            <FormContainer
              inputs={inputs}
              urlEndPoint={urlEndPoint}
              onFormChange={onFormChange}
              handleEditChange={handleEditChange}
              rowData={rowData}
              handleDateChange={handleDateChange}
            />
          </CustomDialog>
          <ImportDialog
            open={importDialogOpen}
            onClose={handleImportDialogClose}
            onSaveClick={handleCompleteButtonClick}
          />
          <ExportDialog
            open={exportDialogOpen}
            onClose={handleExportDialogClose}
            onSaveClick={handleCompleteButtonClick}
          />
          {alertOpen && (
            <Alert
              open={alertOpen}
              message={`${label} added successfully.`}
              duration={2000}
              onClose={() => setAlertOpen(false)}
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
export default CommonPage;
