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
      padding: "14px 20px",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: theme.palette.background.default,
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
  } = props;
  const classes = MenuStyles();
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
          className={classes.root}
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
            <MenuItem style={{ color: "#777777" }} value={option.name} key={i}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{requiredText} is required</FormHelperText>}
      </FormControl>
    </div>
  );
};
export default CustomSelect;
