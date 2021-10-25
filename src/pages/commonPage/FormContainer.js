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

const FormContainer = (props) => {
  const classes = useStyles();
  const {
    inputs,
    urlEndPoint,
    isEdit,
    isClone,
    onFormChange,
    handleEditChange,
    handleDateChange,
    rowData,
  } = props;
  // const { options } = useSelector((state) => state.getDropDown);
  // const { options2 } = useSelector((state) => state.get2ndDropdown);
  // const { options3 } = useSelector((state) => state.get3rdDropdown);
  // const { options4 } = useSelector((state) => state.get4thDropdown);
  // const { options5 } = useSelector((state) => state.get5thDropdown);
  // const { options6 } = useSelector((state) => state.get6thDropdown);
  // const { options7 } = useSelector((state) => state.get7thDropdown);
  // const { options8 } = useSelector((state) => state.get8thDropdown);
  // const { collectionData } = useSelector((state) => state.getCollectionDropdown);
  // const { userInfo } = useSelector((state) => state.userLogin);
  const genderOptions = [
    { name: "Male", value: "Male" },
    { name: "Female", value: "Female" },
    { name: "Other", value: "Other" },
  ];

  const renderInput = (input) => {
    return input?.type === "text" ? (
      <Grid
        item
        md={input.bigSize ? 12 : 6}
        className={classes.inputField}
        key={input.name}>
        <InputLabel className={classes.inputLabel}>{input.label}</InputLabel>
        <CustomInput
          key={input.name}
          onChange={onFormChange}
          name={input.name}
          value={input.value}
          type={input.type}
          helperText={input.alert}
          autoFocus
          fullWidth
          style={{ width: 300 }}
          className={classes.textField}
          size={input.bigInput ? "lg" : "md"}
        />
      </Grid>
    ) : input?.type === "select" ? (
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className={classes.inputField}
        key={input.name}>
        <InputLabel className={classes.inputLabel}>{input.label}</InputLabel>
        <CustomSelect
          key={input.name}
          onChange={onFormChange}
          name={input.name}
          value={input.value}
          type={input.type}
          helperText={input.alert}
          autoFocus
          fullWidth
          style={{ width: 300 }}
          className={classes.textField}
          size='lg'
        />
      </Grid>
    ) : input?.type === "date" ? (
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className={classes.inputField}
        key={input.name}>
        <InputLabel className={classes.inputLabel}>{input.label}</InputLabel>
        <DatePicker
          inputVariant='outlined'
          format='dd/MM/yyyy'
          placeholder='DD/MM/YYYY'
          fullWidth
          width={"100%"}
          height={45}
        />
      </Grid>
    ) : (
      ""
    );
  };

  return (
    <Grid>
      <Grid container spacing={2}>
        {inputs?.length === 0 ? (
          <Typography variant='body2' className={classes.nofields}>
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
