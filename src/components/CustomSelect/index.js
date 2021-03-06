import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
//import MenuList from '@material-ui/core/MenuList';
import { FormHelperText } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const MenuStyles = makeStyles((theme) => ({
  root: {},
  label: {
    "& .MuiInputLabel-shrink": {
      display: "hidden",
    },
  },
  form: {
    backgroundColor: theme.palette.colors.white,
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      padding: "15px 20px",
      background: "#F4F7FE",
      outline: "1px solid #618EFF",

      borderRadius: "8px",
    },
    "& .MuiSelect-select:focus": {
      background: "#F4F7FE",
    },
  },
}));
const CustomSelect = (props) => {
  //for menu button
  const {
    label,
    disabledLabel,
    onChange,
    options,
    value,
    name,
    error,
    disabled,
    onFocus,
    requiredText,
    minWidth,
    noLabel,
    onLabelClick,
    defaultValue,
    isJob,
    isValue,
    isDiff,
    isChecked_corrective_action,
    isProblem,
    urlEndPoint,
    setInternal,
  } = props;
  const classes = MenuStyles();

  React.useEffect(() => {
    let namess =
      urlEndPoint === "corrective-action-report" &&
      value &&
      options?.filter((f) => f._id === value)?.[0]?.value;
    setInternal && namess === "Internal" && setInternal(true);
    setInternal && namess === "Client" && setInternal(false);
    setInternal && namess === "Supplier" && setInternal(false);
    setInternal && namess === undefined && setInternal(false);
    setInternal && namess === null && setInternal(false);
  }, [value]);
  return (
    <div>
      <FormControl
        variant='outlined'
        className={classes.form}
        fullWidth
        error={error}>
        <Select
          defaultValue={defaultValue}
          disabled={disabled}
          name={name}
          value={value}
          style={{ minWidth: minWidth && minWidth }}
          onChange={onChange}
          menustyles='true'
          inputProps={{ "aria-label": "Without label" }}
          onFocus={onFocus}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
            style: {
              maxHeight: "450px",
              maxWidth: "400px",
            },
          }}>
          {noLabel || (
            <MenuItem
              onClick={onLabelClick}
              value={label}
              disabled={disabledLabel}>
              {label}
            </MenuItem>
          )}
          {options?.map((option, i) => (
            <MenuItem
              style={{ color: "#777777" }}
              value={
                isJob
                  ? option._id
                  : isValue
                  ? option._id
                  : isDiff
                  ? option._id
                  : isProblem
                  ? option._id
                  : option.value
              }
              key={i}>
              {isJob
                ? option.Job
                : isValue
                ? option.value
                : isDiff
                ? option.first_name + " " + option.last_name
                : isProblem
                ? option.Issue
                : option.name}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{requiredText} is required</FormHelperText>}
      </FormControl>
    </div>
  );
};
export default CustomSelect;
