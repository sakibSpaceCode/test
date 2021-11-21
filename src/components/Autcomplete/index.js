import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";

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
    "& .MuiOutlinedInput-root": {
      padding: "15px 20px",
      background: "#F4F7FE",
      outline: "1px solid #618EFF",

      height: 50,
      borderRadius: "8px",
    },
    "& .MuiSelect-select:focus": {
      background: "#F4F7FE",
    },
  },
}));
const AutoComplete = ({
  name,
  collection,
  disabled,
  height,
  value,
  onChange,
  error,
  inputRef,
  nextClick,
  options,
}) => {
  const classes = MenuStyles();
  return (
    <Autocomplete
      name={name}
      options={options}
      disabled={disabled}
      className={classes.form}
      getOptionLabel={(option) => JSON.stringify(option.Job_No)}
      renderInput={(params) => (
        <TextField
          error={error}
          {...params}
          inputRef={inputRef}
          required
          variant="outlined"
        />
      )}
      onChange={(event, newValue) => {
        onChange(name, newValue);
      }}
      value={value ? value : null}
    />
  );
};

export default AutoComplete;
