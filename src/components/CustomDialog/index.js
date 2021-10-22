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
import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import CustomButton from "../button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  typoGraphy: {
    fontWeight: 500,
    textTransform: "capitalize",
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
  } = props;

  const classes = useStyles();
  return (
    <Dialog
      open={open}
      maxWidth='sm'
      PaperProps={{
        style: {
          borderRadius: "10px",
          backgroundColor: "#fff",
          padding: 15,
          minWidth: minWidth || "950px",
        },
      }}
      onClose={onClose}
      className={classes.root}>
      <>
        <DialogActions>
          <IconButton>
            <KeyboardBackspaceIcon />
          </IconButton>

          <DialogTitle>
            <Typography
              variant='body'
              className={classes.typoGraphy}>
              {title}
            </Typography>
          </DialogTitle>
          <div style={{ marginLeft: "220px", display: "flex", gap: 10 }}>
            <CustomButton
              disabled={disabled}
              variant='outLined'
              color='primary'
              onClick={onSaveClick}>
              Save
            </CustomButton>
            <CustomButton
              disabled={disabled}
              variant='outLined'
              color='primary'
              onClick={onSaveClick}>
              Save and add another
            </CustomButton>
            <CustomButton
              disabled={disabled}
              variant='outLined'
              color='primary'
              onClick={onSaveClick}>
              Delete
            </CustomButton>
          </div>
        </DialogActions>
      </>
      <DialogContent className={isDelete || classes.content}>
        {children}
      </DialogContent>

      {error && (
        <div className={classes.errorContainer}>
          <ErrorIcon className={classes.errorIcon} />
          <Typography variant='body2' className={classes.errorMessage}>
            {error}
          </Typography>
        </div>
      )}
    </Dialog>
  );
};

export default CustomDialog;
