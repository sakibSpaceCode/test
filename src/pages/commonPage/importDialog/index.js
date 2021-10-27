import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  NativeSelect,
  Typography,
} from "@material-ui/core";
import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { withStyles } from "@material-ui/styles";

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
  input: {
    display: "none",
  },
  btns: {
    border: "2px solid black",
    textTransform: "capitalize",
    padding: 8,
    width: 150,
  },
  submitBtn: {
    textTransform: "capitalize",
    padding: 8,
    width: 170,
    borderRadius: 15,
    fontSize: 16,
  },
}));
const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "18px 26px 10px 90px",
  },
}))(InputBase);
const ImportDialog = (props) => {
  const { open, onClose, onSaveClick } = props;

  const classes = useStyles();
  return (
    <Dialog
      open={open}
      maxWidth='sm'
      PaperProps={{
        style: {
          borderRadius: "10px",
          backgroundColor: "#fff",
          minWidth: "650px",
          backdropFilter: "blur(4px)",
        },
      }}
      onClose={onClose}
      className={classes.root}>
      <>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          color='#fff'
          style={{ backgroundColor: "#618EFF", padding: 10 }}>
          <Typography style={{ fontSize: 17, fontWeight: 700 }}>
            Import
          </Typography>
        </Box>
        <Grid container alignItems='center' style={{ padding: 15 }}>
          <Grid item xs={12}>
            <Typography style={{ fontSize: "0.7rem", color: "#616060" }}>
              The Importer will import the following fields: id, job_id,
              brand_name, location, assigned_to, status, required_hours,
              start_date, first_set_submission, comment, revision,
              final_approval, total_hours_taken, updated_by
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 40 }}>
            <Grid container alignItems='center' justify='center'>
              <Grid item xs={3}>
                <Typography variant='h6' color='primary'>
                  File to Import
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <input
                  accept='image/*'
                  className={classes.input}
                  id='contained-button-file'
                  multiple
                  type='file'
                />
                <label htmlFor='contained-button-file'>
                  <Button
                    variant='contained'
                    className={classes.btns}
                    component='span'>
                    Choose file
                  </Button>
                </label>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 40 }}>
            <Grid container alignItems='center' justify='center'>
              <Grid item xs={3}>
                <Typography variant='h6' color='primary'>
                  Format
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <FormControl className={classes.margin}>
                  <NativeSelect
                    id='demo-customized-select-native'
                    value=''
                    onChange={(e) => console.log(e.target.value)}
                    input={<BootstrapInput />}>
                    <option aria-label='None' value='' />
                    <option value={10}>.xls</option>
                    <option value={20}>.csv</option>
                    <option value={30}>.xlss</option>
                    <option value={30}>.json</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 40 }}>
            <Grid container alignItems='center' justify='center'>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.submitBtn}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    </Dialog>
  );
};

export default ImportDialog;
