import React, { useState, useEffect } from "react";

import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@material-ui/core";
import CustomInput from "../../components/CustomInput";
import CustomSelect from "../../components/CustomSelect";
import DatePicker from "../../components/CustomDate/date-picker.container";
// import MultipleSelect from "components/multiSelection";
// import { DatePicker } from "common";
// import CustomInput from "components/inputfeild";
// import SelectOption from "components/select";
// import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  inputLabel: {
    marginBottom: 5,
    color: "#000",
  },
  inputField: {
    marginBottom: 15,
  },
}));

const ProjectDetailsForm = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    projectManager: "",
    jobId: "",
    projectName: "",
    clientName: "",
    clientContact: "",
    deliveryDate: "",
    productionStartDate: "",
    installationDate: "",
    aboutClient: "",
    drawingLinkCurrent: "",
    drawingLinkChange: "",
  });

  const onFormChange = (e) => {
  };


  return (
    <Grid style={{  zIndex: 999999999}}>
      <Grid container spacing={2}>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Project Manager
          </InputLabel>
          <CustomInput
            onChange={onFormChange}
            name='projectManager'
            value={formData.projectManager}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size='md'
          />
        </Grid>
        <Grid item md={6} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Job ID</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name='jobId'
            value={formData.jobId}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size='md'
          />
        </Grid>
        <Grid item md={4} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Project Name</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name='projectName'
            value={formData.projectName}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size='sm'
          />
        </Grid>

        <Grid item md={4} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Client Name</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name='clientName'
            value={formData.clientName}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size='sm'
          />
        </Grid>

        <Grid item md={4} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Client Contact</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name='clientContact'
            value={formData.clientContact}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size='sm'
          />
        </Grid>

        <Grid item md={4} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>Delivery Date</InputLabel>
          <DatePicker
            inputVariant='outlined'
            format='dd/MM/yyyy'
            placeholder='DD/MM/YYYY'
            fullWidth
            width={"100%"}
            height={45}
            handleDate={onFormChange}
          />
        </Grid>
        <Grid item md={4} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Production Start Date
          </InputLabel>
          <DatePicker
            inputVariant='outlined'
            format='dd/MM/yyyy'
            placeholder='DD/MM/YYYY'
            fullWidth
            width={"100%"}
            height={45}
            handleDate={onFormChange}
          />
        </Grid>
        <Grid item md={4} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Installation Date
          </InputLabel>
          <DatePicker
            inputVariant='outlined'
            format='dd/MM/yyyy'
            placeholder='DD/MM/YYYY'
            fullWidth
            width={"100%"}
            height={45}
            handleDate={onFormChange}
          />
        </Grid>
        <Grid item md={12} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>About Client</InputLabel>
          <CustomInput
            onChange={onFormChange}
            name='aboutClient'
            value={formData.aboutClient}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size='lg'
          />
        </Grid>
        <Grid item md={12} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Drawing Link: Currently
          </InputLabel>
          <CustomInput
            onChange={onFormChange}
            name='drawingLinkCurrent'
            value={formData.drawingLinkCurrent}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size='md'
          />
        </Grid>
        <Grid item md={12} className={classes.inputField}>
          <InputLabel className={classes.inputLabel}>
            Drawing Link: Change
          </InputLabel>
          <CustomInput
            onChange={onFormChange}
            name='drawingLinkChange'
            value={formData.drawingLinkChange}
            //   type={formData.type}
            //   helperText={formData.alert}
            autoFocus
            fullWidth
            style={{ width: 300 }}
            className={classes.textField}
            size='md'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectDetailsForm;
