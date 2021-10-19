import { createMuiTheme } from "@material-ui/core/styles";

const themePrimary = createMuiTheme({
  palette: {
    primary: {
      drawer: "#303030",

      main: "#004372",
      darkBlue: "#0e6cad",
      icon: "#777777",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#f2f7fb",
      dark: "#D9E3EB",
      secondary: "#f2f2f2",
    },
    list: {
      main: "#D9E3EB",
    },
    label: {
      main: "#777777",
    },
    colors: {
      black: "#000",
      gray: {
        main: "#777777",
        light: "#d0d0d0",
        dark: "#46474E",
        veryLight: "#E6E6E6",
        veryDarkGrayishBlue: "#60626E",
        darkGrayishBlue: "#8A8C8D",
        veryDarkGray: "#707070",
      },

      main: "#004372",
      white: "#ffffff",
      red: "#BA1700",
      green: "#31902D",
      magenta: "#c60055",
      pink: "#34495e",
      indigo: "#2980b9",
      purple: "#8e44ad",
      dark: "#282c34",
    },
  },

  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          color: "#303030",
          fontSize: "16px",
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#303030",
          },
        },
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "0.5em",
          height: "0.5em",
        },
        "*::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          borderRadius: "6px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(0,0,0,.4)",
          borderRadius: "6px",
        },
      },
    },
    MuiFormHelperText: {
      root: {
        position: "absolute",
        top: "2.7rem",
        textTransform: "capitalize",
        color: "#FF0000",
      },
    },
  },
});

export default themePrimary;
