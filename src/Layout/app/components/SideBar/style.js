import { makeStyles } from "@material-ui/core";

export const useSidebarStyles = makeStyles((theme) => ({
  listItemButton: {
    width: "240px",
    borderRadius: "0 50px 50px 0",
    color: theme.palette.secondary.main,
    marginBottom: "8px",
    "& .MuiCollapse-wrapperInner": {
      backgroundColor: theme.palette.secondary.main,
    },
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
  subList: {
    backgroundColor: theme.palette.secondary.main,
  },
  subListText: {
    color: theme.palette.primary.drawer,
    textAlign: "center",
  },
  icon: {
    width: 20,
  },
  listItemButtonNested: {
    padding: 1,
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
