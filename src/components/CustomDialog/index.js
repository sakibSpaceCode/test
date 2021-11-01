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
  } = props;

  const classes = useStyles();
  return (
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
          zIndex: 999
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
            <Typography variant="body" className={classes.typoGraphy}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Grid container justify="flex-end" alignItems="center" spacing={1}>
              <Grid item>
                <CustomButton
                  disabled={disabled}
                  variant="outLined"
                  color="primary"
                  onClick={onSaveClick}
                  textColor="#618EFF"
                >
                  Save
                </CustomButton>
              </Grid>
              <Grid item>
                <CustomButton
                  disabled={disabled}
                  variant="outLined"
                  color="primary"
                  onClick={onSaveClick}
                  textColor="#618EFF"
                >
                  Save and add another
                </CustomButton>
              </Grid>
              <Grid item>
                <CustomButton
                  disabled={disabled}
                  variant="outLined"
                  color="primary"
                  onClick={onSaveClick}
                  textColor="#618EFF"
                >
                  Delete
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
      <Grid
        style={{ padding: "15px 35px", marginBottom: "10px" }}
        className={isDelete || classes.content}
      >
        {children}
      </Grid>

      {error && (
        <div className={classes.errorContainer}>
          <ErrorIcon className={classes.errorIcon} />
          <Typography variant="body2" className={classes.errorMessage}>
            {error}
          </Typography>
        </div>
      )}
    </Dialog>
  );
};

export default CustomDialog;
