import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btnText: {
    background: "#FFFFFF",
    border: "2px solid #618EFF",

    borderRadius: 15,
    fontweight: 600,
    fontSize: 16,
    textTransform: "capitalize",
    "&:hover": {
      background: "#FFFFFF",
      border: "2px solid #618EFF",

      borderRadius: 15,
      fontweight: 600,
      fontSize: 16,
      textTransform: "capitalize",
    },
  },
}));

const CustomButton = ({
  children,
  disabled,
  variant,
  width,
  onClick,
  textColor,
}) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.btns}
      disabled={disabled}
      variant={variant}
      className={classes.btnText}
      color="primary"
      onClick={onClick}
      style={{
        backgroundColor: variant === "outlined" && "#fff",
        minWidth: width,
      }}
    >
      <span style={{ color: textColor }}>{children}</span>
    </Button>
  );
};
export default CustomButton;
