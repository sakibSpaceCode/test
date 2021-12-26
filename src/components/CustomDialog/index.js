import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import CustomButton from "../button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDeleteResponse,
  deleteFormData,
} from "../../redux/actions/commonFormActions";
import { getData } from "../../redux/actions/commonGetDataActions";
import ConfirmationDialog from "../confirmations/confirmation.container";
import Alert from "../alert/alert.container";
const useStyles = makeStyles((theme) => ({
  typoGraphy: {
    fontWeight: 600,
    fontSize: "20px",
    textTransform: "capitalize",
    borderBottom: "2px solid black",
    // marginBottom: 10,
  },
  content: {
    minHeight: 100,
  },
  errorContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 204, 204,0.4)",
    marginLeft: 20,
    padding: 5,
    borderRadius: 5,
  },
  errorIcon: {
    color: "#b33939",
    fontSize: "small",
  },
  errorMessage: {
    color: "#b33939",
    marginLeft: 10,
    fontWeight: 500,
  },
  root: {
    zIndex: 99999999,
    "& .MuiDialogActions-root": {
      padding: 0,
      justifyContent: "flex-start",
      marginBottom: 15,
    },
    "& .MuiDialogTitle-root": {
      padding: 0,
      marginTop: 10,
    },
  },
}));
const CustomDialog = (props) => {
  const {
    open,
    onClose,
    title,
    children,
    onCancelClick,
    onSaveClick,
    disabled,
    loading,
    error,
    minWidth,
    isDelete,
    isEdit,
    nextClick,
    onNextClick,
    apiURL,
    json,
    pageSize,
    pageNum,
    setEditDialogOpen,
    setIsEdit,
    resetFormData,
  } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [errorD, setErrorD] = useState("");
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { deleteResponse, deleteError, deleteLoading } = useSelector(
    (state) => state.deleteField
  );
  const handleDeleteButtonClick = () => {
    dispatch(deleteFormData(apiURL, json));
  };
  console.log(json);
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
    setErrorD("");
  };
  useEffect(() => {
    if (deleteResponse && deleteResponse.success === true) {
      setDialogOpen(false);
      setEditDialogOpen(false);
      resetFormData();
      setIsEdit(false);
      setDeleteAlert(true);
      // dispatch(getData(apiURL));
    } 
    return () => {
      setTimeout(() => {
        dispatch(clearDeleteResponse());
      }, 3000);
    };
  }, [deleteResponse?.success]);
  console.log(deleteResponse, "ddd");
  return (
    <>
      <Dialog
        open={open}
        maxWidth="sm"
        PaperProps={{
          style: {
            borderRadius: "10px",
            backgroundColor: "#fff",
            padding: 20,
            minWidth: minWidth || "1000px",
            backdropFilter: "blur(4px)",
            zIndex: 99999,
          },
        }}
        onClose={onClose}
        className={classes.root}
      >
        <>
          <Grid
            container
            style={{ padding: "15px 35px", marginBottom: "30px" }}
            alignItems="center"
          >
            <Grid item style={{ marginLeft: "-10px" }}>
              <IconButton onClick={onClose}>
                <KeyboardBackspaceIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <Typography variant="body1" className={classes.typoGraphy}>
                {title}
              </Typography>
            </Grid>
            <Grid item xs>
              <Grid
                container
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <CustomButton
                    disabled={disabled}
                    variant="outlined"
                    color="primary"
                    onClick={onSaveClick}
                    textColor="#618EFF"
                  >
                    {loading && !nextClick ? (
                      <CircularProgress color="white" size="20px" />
                    ) : (
                      "Save"
                    )}
                  </CustomButton>
                </Grid>
                {!isEdit && (
                  <Grid item>
                    <CustomButton
                      disabled={disabled}
                      variant="outlined"
                      color="primary"
                      onClick={onNextClick}
                      textColor="#618EFF"
                    >
                      {loading && nextClick ? (
                        <CircularProgress color="white" size="20px" />
                      ) : (
                        "Save and add another"
                      )}
                    </CustomButton>
                  </Grid>
                )}
                {isEdit && (
                  <Grid item>
                    <CustomButton
                      disabled={disabled}
                      variant="outlined"
                      color="primary"
                      onClick={handleDialogOpen}
                      textColor="#618EFF"
                    >
                      Delete
                    </CustomButton>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </>

        {error && (
          <div className={classes.errorContainer}>
            <ErrorIcon className={classes.errorIcon} />
            <Typography variant="body2" className={classes.errorMessage}>
              {error}
            </Typography>
          </div>
        )}
        <DialogContent>
          <Grid
            style={{ padding: "15px 35px", marginBottom: "10px" }}
            className={isDelete || classes.content}
          >
            {children}
          </Grid>
        </DialogContent>
      </Dialog>
      <ConfirmationDialog
        deleteLabel
        handleDialogClose={handleDialogClose}
        dialogOpen={dialogOpen}
        title="Are you sure you want to delete ?"
        type={"warning"}
        error={errorD}
      >
        <Grid
          container
          spacing={2}
          className={classes.deleteDialog}
          justify="center"
        >
          <Grid item>
            <CustomButton
              variant="outlined"
              color="primary"
              onClick={handleDialogClose}
            >
              Cancel
            </CustomButton>
          </Grid>
          <Grid item>
            <CustomButton
              variant="outlined"
              color="primary"
              onClick={handleDeleteButtonClick}
            >
              {deleteLoading ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Continue"
              )}
            </CustomButton>
          </Grid>
        </Grid>
      </ConfirmationDialog>
      {deleteAlert && (
        <Alert
          open={deleteAlert}
          message={"Record Deleted Successfully."}
          duration={2000}
          onClose={() => setDeleteAlert(false)}
          vertical={"bottom"}
          horizontal={"center"}
          severity={"success"}
          actions={false}
        />
      )}
    </>
  );
};

export default CustomDialog;
