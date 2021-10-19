import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Routes from "./routes/routes";
import { themePrimary } from "./common/themes/index";
function App() {
  return (
    <>
      <MuiThemeProvider theme={themePrimary}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </>
  );
}

export default App;
