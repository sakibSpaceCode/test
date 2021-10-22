import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    flexGrow: 0,
    maxWidth: "19%",
    flexBasis: "19%",

    "& .MuiGrid-spacing-xs-2 > .MuiGrid-item": {
      maxWidth: "20%",
      flexBasis: "20%",
    },
  },
}));
