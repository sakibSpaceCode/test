import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import CustomSearch from "../../components/CustomSearch";
import { useStyles } from "./style";
import BorderPaper from "../../components/BorderPaper";
import CustomTable from "../../components/CustomTable";
import CustomButton from "../../components/button";
import useForm from "../../hooks/useForm";
import FormContainer from "./FormContainer";
import CustomDialog from "../../components/CustomDialog";

const CommonPage = (props) => {
  const classes = useStyles();
  const { data } = props;
  const mData = data.length > 1 ? data[1] : data[0];
  const label = mData.label;
  const urlEndPoint = mData.urlEndPoint;

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [rowData, setRowData] = useState({});

  const submitCallback = (e) => {
    // setOpenAdd(false);
    setEditDialogOpen(false);
    resetFormData();
  };
  const [inputs, onFormChange, handleEditChange, setSubmit, resetFormData] =
        useForm(mData.fields, submitCallback);
    
    const handleEditDialog = () => {
        setEditDialogOpen(true)
  };
    const handleEditDialogClose = () => {
        setEditDialogOpen(false)
  };
  const handleCompleteButtonClick = () => {};
  return (
    <>
      <Grid container justify='space-between' spacing={8}>
        <Grid item xs={6}>
          <Grid container direction='column' spacing={2}>
            <Grid item xs={12}>
              <CustomSearch placeholder={`Search ${label} to view`} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify='flex-end' spacing={2}>
            <Grid item>
              <CustomButton width='150px' variant='outlined' onClick={handleEditDialog}>
                {label === "Job Card" ? "Add Job Card" : "Add"}
              </CustomButton>
            </Grid>
            <Grid item>
              <CustomButton width='150px' variant='outlined'>
                Import
              </CustomButton>
            </Grid>
            <Grid item>
              <CustomButton width='150px' variant='outlined'>
                Export
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
      <CustomDialog
        title={`Add ${label}`}
        open={editDialogOpen}
        onClose={handleEditDialogClose}
        onCancelClick={handleEditDialogClose}
        // onNextClick={handleNextClick}
        // onCompleteClick={handleCompleteButtonClick}
        onSaveClick={handleCompleteButtonClick}
        // isSave={isEdit || isClone ? true : false}
        // loading={isEdit ? putLoading : postLoading}
        // error={errorMessage}
        // disabled={inputs?.length === 0}>
          >
              
        <FormContainer
          inputs={inputs}
          urlEndPoint={urlEndPoint}
          onFormChange={onFormChange}
          handleEditChange={handleEditChange}
          rowData={rowData}
        />
      </CustomDialog>
    </>
  );
};
export default CommonPage;
