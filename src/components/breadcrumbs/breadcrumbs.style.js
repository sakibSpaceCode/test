import { makeStyles } from "@material-ui/core";

export const breadcrumbsStyles = makeStyles(
  (theme) => ({
    breadcrumbs: {
      "& .MuiBreadcrumbs-separator": {
        fontSize: "2rem",
        fontWeight: "bold",
        marginLeft: "10px",
        marginRight: "-18px",
        color: theme.palette.primary.main,
      },
    },
    disabled: {
      pointerEvents: "none",
      opacity: 0.4,
    },
    breadcrumbNav: {
      textDecoration: "none",
      color: theme.palette.colors.black,
    },
    typography: {
      fontWeight: 600,
      fontSize: 20,

      color: "#303030",
    },
    typographylong: {
      color: theme.palette.primary.main,
      textTransform: "capitalize",
      fontWeight: "bold",
      fontSize: "24px",
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginLeft: "10px",
      },
      "@media (max-width: 549px)": {
        marginLeft: theme.spacing(0),
        fontSize: "10px",
      },
      "@media (max-width: 959px)": {
        fontSize: "12px",
        marginLeft: "22px",
      },
    },
    typographylong2: {
      color: theme.palette.primary.main,
      cursor: "pointer",
      textTransform: "capitalize",
      fontWeight: "bold",
      fontSize: "24px",
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginLeft: "10px",
      },
      "@media (max-width: 549px)": {
        marginLeft: theme.spacing(0),
        fontSize: "10px",
      },
      "@media (max-width: 959px)": {
        fontSize: "12px",
        marginLeft: "22px",
      },
    },
    typographylong3: {
      color: theme.palette.primary.main,
      cursor: "pointer",
      textTransform: "capitalize",
      fontWeight: "bold",
      fontSize: "26px",
      marginLeft: "10px",
      marginRight: "10px",
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginLeft: "10px",
      },
      "@media (max-width: 549px)": {
        marginLeft: theme.spacing(0),
        fontSize: "10px",
      },
      "@media (max-width: 959px)": {
        fontSize: "12px",
        marginLeft: "22px",
      },
    },
    div: {
      display: "flex",
      marginLeft: "32px",
      alignItems: "center",
      justifyContent: "center",
    },
  }),
  { index: 1 }
);
