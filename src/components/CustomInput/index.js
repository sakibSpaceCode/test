import React from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useInputStyles = makeStyles((theme) => ({
  md: {
    width: "100%",

    "& .MuiOutlinedInput-root": {
      background: "#F4F7FE",
      outline: "1px solid #618EFF",

      borderRadius: "8px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "13px 12px",
    },
    "& .MuiOutlinedInput-input:focus": {
      outline: "none",
    },
  },
  sm: {
    "& .MuiInputBase-fullWidth": {},
    "& .MuiOutlinedInput-root": {
      background: "#F4F7FE",
      outline: "1px solid #618EFF",

      borderRadius: "8px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "13px 12px",
    },
    "& .MuiOutlinedInput-input:focus": {
      outline: "none",
    },
  },
  lg: {
    borderRadius: "3px",
    "& .MuiOutlinedInput-root": {
      background: "#F4F7FE",
      outline: "1px solid #618EFF",

      borderRadius: "8px",
    },

    "& .MuiOutlinedInput-input": {
      padding: "28px 12px",
    },
    "& .MuiOutlinedInput-input:focus": {
      backgroundColor: theme.palette.background.default,
      outline: "none",
    },
  },
}));
const CustomInput = (props) => {
  const classes = useInputStyles();

  const {
    name,
    label,
    value,
    onChange,
    size,
    focus,
    fullWidth,
    helperText,
    error,
    onFocus,
    onBlur,
    onEnterPress,
    width,
    bgColor,
    inputRef,
    textTransform,
    ref,
    id,
    Icon,
    disabled,
    type,
    standard,
    placeholder,
    multiline,
    inputProps,
    toolTipLabel,
    onIconClick,
    multiple,
  } = props;
  return (
    <TextField
      variant={standard ? "standard" : "outlined"}
      error={error}
      helperText={helperText}
      label={label}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      id={id}
      multiple={multiple}
      className={
        size === "md" ? classes.md : size === "lg" ? classes.lg : classes.sm
      }
      autoComplete='off'
      // autoFocus={focus}
      fullWidth={fullWidth}
      // inputProps={{ autoFocus: focus }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (onEnterPress) {
            onEnterPress();
            e.preventDefault();
          }
        }
      }}
      style={{ width: width, backgroundColor: bgColor }}
      inputProps={{
        ...inputProps,
        autoFocus: focus,
        style: {
          textTransform: textTransform,
        },
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      inputRef={inputRef}
      ref={ref}
      disabled={disabled}
      multiline={multiline}
      InputProps={{
        endAdornment: Icon && (
          <InputAdornment position='end'>
            
              <IconButton onClick={onIconClick}>
                {" "}
                <Icon />
              </IconButton>
            
          </InputAdornment>
        ),
      }}
    />
  );
};
export default CustomInput;
