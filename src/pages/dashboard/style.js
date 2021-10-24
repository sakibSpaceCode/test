import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    flexGrow: 0,
    maxWidth: "18.6%",
    flexBasis: "18.6%",

    "& .MuiGrid-spacing-xs-2 > .MuiGrid-item": {
      maxWidth: "20%",
      flexBasis: "20%",
    },
  },
  cont: {
    marginTop: "25px",
  },
  pieChart: {
    borderRadius: " 20px 20px 20px 20px",
    padding: "20px",
  },
}));
