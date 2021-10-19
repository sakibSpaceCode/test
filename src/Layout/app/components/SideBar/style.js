import { makeStyles } from "@material-ui/core";

export const useSidebarStyles = makeStyles((theme) => ({
  listItemButton: {
    width: "210px",
    borderRadius: "3px",
    color: theme.palette.secondary.main,
    marginBottom: "8px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.drawer,
    },
    "&:focus-within": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.drawer,
    },
    "@media (max-width: 549px)": {
      width: "150px",
      letterSpacing: "0px",
      fontSize: "10px",
    },
  },
  icon: {
    width: 20,
  },
  listitemText: {
    marginLeft: "18px",
    letterSpacing: "0px",
    fontSize: "16px",
    "@media (max-width: 549px)": {
      marginLeft: "10px",
      letterSpacing: "0px",
      fontSize: "8px",
    },
  },
}));
