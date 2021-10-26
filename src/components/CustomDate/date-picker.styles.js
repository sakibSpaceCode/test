import { makeStyles } from "@material-ui/core";

export const datePickerStyles = makeStyles(
  () => ({
    root: {
      "& .MuiOutlinedInput-root": {
        padding: 23,
        background: "#F4F7FE",
        outline: "1px solid #618EFF",

        borderRadius: "6px",
      },
    },
  }),
  { index: 1 }
);
