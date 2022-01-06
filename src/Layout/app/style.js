import { makeStyles } from "@material-ui/core";

const drawerWidth = 280;
export const useDashboardStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      backgroundColor: theme.palette.primary.drawer,
      "& .MuiDrawer-paperAnchorDockedLeft": {
        border: "none",
      },
    },

    drawer: {
      width: drawerWidth,

      flexShrink: 0,
      "& .MuiBackdrop-root": {
        all: "unset",
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.drawer,
      [theme.breakpoints.down("sm")]: {
        width: 222,
      },
      "@media (max-width: 960px)": {
        width: 230,
      },
      "@media (max-width: 600px)": {
        width: 222,
      },
      "@media (max-width: 549px)": {
        width: 180,
      },
    },

    appBar: {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "20px 20px 0 0",
      height: "4.1rem",
    },
    mainRoutes: {
      backgroundColor: "#e5e5e5",
      padding: "30px 20px",
    },
    logoContainer: {
      backgroundColor: theme.palette.primary.drawer,

      width: drawerWidth,
      [theme.breakpoints.down("sm")]: {
        marginRight: "5px",
      },
      "@media (max-width: 549px)": {
        height: "3.5rem",
        marginLeft: -15,
        fontSize: "2.2rem",
        width: 120,
      },
    },
    logo: {
      marginBottom: 4,
      marginTop: 34,

      zIndex: 999,
      height: "60px",
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        marginRight: "50px",
      },
      "@media (max-width: 549px)": {
        width: "100px",
        height: "16px",
        marginLeft: 10,
      },
    },
    mainToolbar: {
      display: "flex",
      marginTop: 4,
    },
    notificationsIcon: {
      color: theme.palette.primary.icon,
    },
    breadcrumbs: { flexGrow: 1 },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },

    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      overflowX: "hidden",
      overflowY: "hidden",
      backgroundColor: theme.palette.background.main,
    },
    typography: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      fontSize: "28px",
      marginLeft: "32px",
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginLeft: "10px",
      },
      "@media (max-width: 549px)": {
        marginLeft: theme.spacing(0),
      },
    },
    list: {
      marginLeft: 10,
      overflowY: "auto",
      margin: 0,
      paddingTop: 60,

      listStyle: "none",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        width: "0.55em",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
        borderRadius: "6px",
      },
    },

    appBarDivider: {
      background: theme.palette.colors.gray.light,
      marginTop: "0.6rem",
      height: "52px",
      marginLeft: "24px",
      width: "1px",
      marginRight: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        marginLeft: "1px",
      },
      "@media (max-width: 549px)": {
        marginLeft: theme.spacing(0),
      },

      //    fontWeight: 'bold'
    },
    appBarDividerBottom: {
      // marginTop: '0.1rem',
      fontWeight: "bold",
    },
    logoDividerBottom: {
      background: theme.palette.colors.gray.light,
    },
    addPermission: {
      padding: "10px 20px",
    },
  }),
  { index: 1 }
);
