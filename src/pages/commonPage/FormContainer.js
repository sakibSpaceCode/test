import React, { useState, useEffect, useRef } from "react";

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
import LinkIcon from "@material-ui/icons/Link";
import CustomInput from "../../components/CustomInput";
import CustomSelect from "../../components/CustomSelect";
import DatePicker from "../../components/CustomDate/date-picker.container";
// import MultipleSelect from "components/multiSelection";
// import { DatePicker } from "common";
// import CustomInput from "components/inputfeild";
// import SelectOption from "components/select";
import { useDispatch, useSelector } from "react-redux";
import AutoComplete from "../../components/Autcomplete";
const useStyles = makeStyles((theme) => ({
  inputLabel: {
    marginBottom: 8,
    fontWeight: "700",
    color: " #404040",
  },
  inputField: {
    // marginBottom: 2,
  },
  selectAlert: {
    color: "#f00",
    fontSize: 12,
    marginLeft: 14,
    marginTop: 5,
    // position: "absolute",
  },
  switchBase: {
    color: "#618EFF",
    "&$checked": {
      color: "#618EFF",
    },
    "&$checked + $track": {
      backgroundColor: "#618EFF",
    },
  },
}));

const FormContainer = (props) => {
  const classes = useStyles();
  const linkRef = useRef();

  const {
    inputs,
    urlEndPoint,
    isEdit,
    isClone,
    onFormChange,
    handleEditChange,
    handleDateChange,
    rowData,
    i,
    setProjectName,
    projectName,
    noProjectName,
    checked,
    setChecked,
    setInternal,
    internal,
    editPermission,
  } = props;

  const { options } = useSelector((state) => state.getDropdown);
  const { options2 } = useSelector((state) => state.get2ndDropdown);
  const { options3 } = useSelector((state) => state.get3rdDropdown);
  const { options4 } = useSelector((state) => state.get4thDropdown);
  const { options5 } = useSelector((state) => state.get5thDropdown);
  const { options6 } = useSelector((state) => state.get6thDropdown);
  const { options7 } = useSelector((state) => state.get7thDropdown);
  const { options8 } = useSelector((state) => state.get8thDropdown);
  const { optionsDiff } = useSelector((state) => state.getDiffDropdown);
  const { options2Diff } = useSelector((state) => state.get2ndDiffDropdown);

  const booleanOptions = [
    { name: "Yes", value: true },
    { name: "No", value: false },
  ];
  const booleanOptionsText = [
    { name: "Yes", value: "true" },
    { name: "No", value: "false" },
  ];
  const sizeOptions = [
    { name: "Small", value: "small" },
    { name: "Medium", value: "medium" },
    { name: "Large", value: "large" },
  ];
  const integerOptions = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "11", value: 11 },
    { name: "12", value: 12 },
    { name: "13", value: 13 },
    { name: "14", value: 14 },
    { name: "15", value: 15 },
    { name: "16", value: 16 },
    { name: "17", value: 17 },
    { name: "18", value: 18 },
    { name: "19", value: 19 },
    { name: "20", value: 20 },
  ];

  const onIconClick = () => {
    linkRef.current.value && window.open(linkRef.current.value, "_blank");
  };

  let jobID = inputs?.filter((f) => f.name === "Job")?.[0]?.value;
  useEffect(() => {
    let projectName = options?.filter((f) => f._id === jobID)?.[0]?.name ?? "";
    setProjectName && setProjectName(projectName);
  }, [jobID]);
  const renderInput = (input) => {
    //  console.log(input.name,input.value);
    return input?.type === "text" ? (
      <Grid
        item
        md={input.bigSize ? 12 : 6}
        className={classes.inputField}
        key={input.name}
      >
        <InputLabel className={classes.inputLabel}>{input.label}</InputLabel>
        <CustomInput
          key={input.name}
          onChange={isEdit ? handleEditChange : onFormChange}
          name={input.name}
          value={
            input.name === "brand_name" || input.label === "Project Name"
              ? projectName
              : input.value ?? ""
          }
          type={input.name === "Quantity" ? "number" : input.type}
          autoFocus
          fullWidth
          disabled={
            (input.label === "Name *" ||
              input.name === "brand_name" ||
              input.label === "Project Name" ||
              input.disable ||
              !editPermission) &&
            true
          }
          style={{ width: 300 }}
          className={classes.textField}
          size={input.bigInput ? "lg" : "md"}
          multiple={
            input.name === "Important_Notes" || input.name === "solution"
              ? true
              : false
          }
          Icon={input.link && LinkIcon}
          inputRef={input.link && linkRef}
          onIconClick={onIconClick}
        />
        {input.alert && (
          <div className={classes.selectAlert}>
            {input.label} {input.alert}
          </div>
        )}
      </Grid>
    ) : input?.type === "select" && input?.name !== "if_internal" ? (
      <Grid
        item
        md={input.bigSize ? 12 : 6}
        className={classes.inputField}
        key={input.name}
      >
        <InputLabel className={classes.inputLabel}>{input.label}</InputLabel>
        <CustomSelect
          key={input.name}
          onChange={isEdit ? handleEditChange : onFormChange}
          name={input.name}
          value={input.value ?? ""}
          type={input.type}
          helperText={input.alert}
          autoFocus
          fullWidth
          style={{ width: 300 }}
          className={classes.textField}
          disabled={input.disable || !editPermission}
          size="lg"
          urlEndPoint={urlEndPoint}
          setInternal={setInternal}
          options={
            input.name === "Job"
              ? options
              : urlEndPoint === "production/joinery" ||
                urlEndPoint === "production/metal" ||
                urlEndPoint === "production/joinery" ||
                urlEndPoint === "production/paint" ||
                urlEndPoint === "production/electrical" ||
                urlEndPoint === "production/final"
              ? booleanOptions
              : input.name === "revision"
              ? integerOptions
              : input.name === "project_size"
              ? sizeOptions
              : input.name === "Project_Reference"
              ? options2
              : urlEndPoint === "production/status-update" &&
                input.name === "Status"
              ? options2
              : urlEndPoint === "corrective-action-report" &&
                input.name === "if_internal"
              ? options2
              : urlEndPoint === "corrective-action-report" &&
                input.name === "responsible"
              ? options3
              : urlEndPoint === "corrective-action-report" &&
                input.name === "action_type"
              ? options4
              : urlEndPoint === "design-department/design-details" &&
                input.name === "status"
              ? options2
              : input.name === "Project_type"
              ? options3
              : input.name === "Structure_Life_Span"
              ? options4
              : input.name === "Material_Specification"
              ? options5
              : input.name === "Packaging"
              ? options6
              : input.name === "Post_Delivery"
              ? options7
              : input.name === "Drawing_References"
              ? options8
              : urlEndPoint === "design-department/corrective-action" &&
                input.name === "previous_designer"
              ? optionsDiff
              : urlEndPoint === "design-department/corrective-action" &&
                input.name === "assigned_to"
              ? optionsDiff
              : urlEndPoint === "design-department/design-details" &&
                input.name === "assigned_to"
              ? optionsDiff
              : input.name === "problem"
              ? options2Diff
              : booleanOptions
          }
          isDiff={
            (urlEndPoint === "design-department/corrective-action" &&
              input.name === "previous_designer") ||
            (urlEndPoint === "design-department/corrective-action" &&
              input.name === "assigned_to") ||
            (urlEndPoint === "design-department/design-details" &&
              input.name === "assigned_to")
          }
          isProblem={
            urlEndPoint === "corrective-action-report" &&
            input.name === "problem"
          }
          isValue={
            input.name === "Project_Reference" ||
            input.name === "Project_type" ||
            input.name === "Structure_Life_Span" ||
            input.name === "Material_Specification" ||
            input.name === "Packaging" ||
            input.name === "Post_Delivery" ||
            input.name === "Drawing_References" ||
            (urlEndPoint === "production/status-update" &&
              input.name === "Status") ||
            (urlEndPoint === "design-department/design-details" &&
              input.name === "status") ||
            (urlEndPoint === "corrective-action-report" &&
              input.name === "if_internal") ||
            (urlEndPoint === "corrective-action-report" &&
              input.name === "responsible") ||
            (urlEndPoint === "corrective-action-report" &&
              input.name === "action_type")
              ? true
              : false
          }
          isJob={input.name === "Job" ? true : false}
          isChecked_corrective_action={
            input.name === "checked_corrective_action" ? true : false
          }
        />
        {input.alert && (
          <div className={classes.selectAlert}>
            {input.label} {input.alert}
          </div>
        )}
      </Grid>
    ) : input?.type === "select" &&
      input?.name === "if_internal" &&
      internal ? (
      <Grid item md={6} className={classes.inputField} key="if_internal">
        <InputLabel className={classes.inputLabel}>If Internal</InputLabel>
        <CustomSelect
          key="if_internal"
          onChange={isEdit ? handleEditChange : onFormChange}
          name="if_internal"
          value={input.value ?? ""}
          type={input.type}
          helperText={input.alert}
          autoFocus
          fullWidth
          style={{ width: 300 }}
          className={classes.textField}
          disabled={input.disable || !editPermission}
          size="lg"
          urlEndPoint={urlEndPoint}
          setInternal={setInternal}
          options={
            urlEndPoint === "corrective-action-report" &&
            input.name === "if_internal"
              ? options2
              : booleanOptions
          }
          isValue={
            urlEndPoint === "corrective-action-report" &&
            input.name === "if_internal"
              ? true
              : false
          }
        />
        {input.alert && (
          <div className={classes.selectAlert}>
            {input.label} {input.alert}
          </div>
        )}
      </Grid>
    ) : input?.type === "date" ? (
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className={classes.inputField}
        key={input.name}
      >
        <InputLabel className={classes.inputLabel}>{input.label}</InputLabel>
        <DatePicker
          inputVariant="outlined"
          format="dd-MM-yyyy"
          placeholder="DD-MM-YYYY"
          fullWidth
          width={"100%"}
          disabled={!editPermission}
          height={50}
          value={input.value ?? ""}
          handleDate={(date) => handleDateChange(input.name, date)}
        />
        {input.alert && (
          <div className={classes.selectAlert}>
            {input.label} {input.alert}
          </div>
        )}
      </Grid>
    ) : input.type === "autocomplete" ? (
      <Grid item md={6} className={classes.inputField}>
        <InputLabel className={classes.inputLabel}>Job No.</InputLabel>
        <AutoComplete
          onChange={(e, newValue) => onFormChange(e, newValue, true)}
          name={input.name}
          value={options?.filter((val) => val?._id === input.value)[0] ?? ""}
          fullWidth
          style={{ width: 300 }}
          className={classes.textField}
          size="lg"
          options={options}
          isJob
        />
      </Grid>
    ) : input.type === "toggle" ? (
      <Grid container justify="flex-end" key={input.name}>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                className={classes.switchBase}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                name={input.name}
                color="primary"
                disabled={!editPermission}
              />
            }
            name={input.name}
          />
        </Grid>
      </Grid>
    ) : (
      ""
    );
  };

  return (
    <Grid>
      <Grid container spacing={5}>
        {inputs?.length === 0 ? (
          <Typography variant="body2" className={classes.nofields}>
            No Fields Available.
          </Typography>
        ) : (
          inputs?.map((input) => renderInput(input))
        )}
      </Grid>
    </Grid>
  );
};

export default FormContainer;
