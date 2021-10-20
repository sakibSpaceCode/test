import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
