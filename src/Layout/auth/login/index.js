import { Grid, Typography } from "@material-ui/core";
import React from "react";
import BackImage from "../../../common/Assets/loginImage/login.jpg";
import WhiteLogo from "../../../common/Assets/loginImage/logo.png";
import BlackLogo from "../../../common/Assets/loginImage/blackLogo.png";
import { useStyles } from "./styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Grid container style={{ height: "100vh", overflow: "hidden" }}>
      <Grid
        item
        xs={6}
        className={`${classes.backImage} blur`}
        style={{ backgroundImage: `url(${BackImage})`, backgroudSize: "cover" }}
      >
        <img src={WhiteLogo} className={classes.whiteLogo} />
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item className={classes.welcomeContainer}>
            <Typography className={classes.welTypo} varaint="h6">
              Welcome
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              style={{ marginTop: 40 }}
              spacing={6}
            >
              <Grid item>
                <img src={BlackLogo} className={classes.blackimage} />
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <input
                      className={classes.input}
                      placeholder="Username"
                    ></input>
                  </Grid>
                  <Grid item>
                    <input
                      className={classes.input}
                      placeholder="password"
                    ></input>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <button className={classes.btn}>
                  Login
                  <ArrowForwardIcon
                    style={{ position: "absolute", right: "14px", top: "11px" }}
                  />
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
