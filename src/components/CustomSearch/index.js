import React from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
//import Tooltip from '@material-ui/core/Tooltip';
import Close from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useSearchStyles = makeStyles((theme) => ({
  md: {
    width: "100%",
  },
  lg: {
    width: "100%",
    minWidth: "450px",
  },
  root: {
    "& .MuiOutlinedInput-input": {
      padding: "16px 16px",
      zIndex: "4",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      backgroundColor: theme.palette.colors.white,
      border: `1.5px solid #E4E4E4`,
      borderRadius: "10px",
      height: 53,
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
    },
    "& .MuiButton-root": {
      zIndex: 999,
      borderRadius: "10px",
      width: "110px",
      height: "48px",
      left: "22px",
      top: "-1px",
    },
    "& .MuiInputAdornment-root": {
      zIndex: 999,
        color: theme.palette.primary.main,
      marginLeft: 10
    },
  },
  label: {
    "& .MuiFormLabel-root": {
      marginTop: "-2px",
    },
  },
  cricularProgress: {
    zIndex: 1000,
  },
}));
const CustomSearch = (props) => {
  const classes = useSearchStyles();
  const {
    value,
    handleSearch,
    size,
    placeholder,
    handleChange,
    onEnterPress,
    inputRef,
    handleSearchDelete,
    loader,
    focus,
    onBlur,
    disabled,
  } = props; // pass value and onClick(handleSearch) function to get the value after clicking the search icon

  return (
    <div>
      <FormControl
        className={
          size === "md"
            ? `${classes.label} ${classes.md}`
            : `${classes.label} ${classes.lg}`
        }
        variant='outlined'>
        <OutlinedInput
          className={classes.root}
          type='text'
          value={value}
          placeholder={placeholder}
          onFocus={focus}
          onMouseOut={onBlur}
          onChange={handleChange}
          inputRef={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (onEnterPress) {
                e.preventDefault();
                onEnterPress();
              }
            }
          }}
          startAdornment={
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment>
              {value && (
                <IconButton onClick={handleSearchDelete}>
                  <Close />
                </IconButton>
              )}
              {!loader ? (
                <Button
                  variant='contained'
                  onClick={handleSearch}
                  color='primary'>
                  Search
                </Button>
              ) : (
                <CircularProgress
                  className={classes.cricularProgress}
                  size={26}
                />
              )}
            </InputAdornment>
          }
          disabled={disabled}
        />
      </FormControl>
    </div>
  );
};

export default CustomSearch;
