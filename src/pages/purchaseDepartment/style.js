import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    border: "3px solid #FFFCFC",
    borderRadius: 10,
    minHeight: 190,

    "& .MuiGrid-grid-xs-3": {
      maxWidth: "23%",
      flexBasis: "23%",
    },
  },
}));
