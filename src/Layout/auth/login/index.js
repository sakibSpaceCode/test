import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import BackImage from "../../../common/Assets/loginImage/login.jpg";
import WhiteLogo from "../../../common/Assets/loginImage/logo.png";
import BlackLogo from "../../../common/Assets/loginImage/blackLogo.png";
import { useStyles } from "./styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, clearLoginState } from "../../../redux/actions/authActions";
import Snackbar from "@material-ui/core/Snackbar";
import Loader from "../../../components/loader";

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;
  const { error } = useSelector((state) => state.userLoginValidateReducer);
  const checkAtLeastLength = (expression, length) =>
    expression && expression.trim().length >= length;
  const isValidFun = (expression) => checkAtLeastLength(expression, 0);
  React.useEffect(() => {
    if (userInfo) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  function handleEmailChange(e) {
    setUserName(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmitLogin();
    }
  };
  function onSubmitLogin() {
    dispatch(login(email, password));
  }

  const handleClose = () => {
    setMessage("");
    setOpen(false);
  };
  useEffect(() => {
    if (error) {
      setMessage(error);
    }
  }, [error]);
  const [pageLoading, setPageLoading] = useState(true);
  React.useEffect(() => {
    setPageLoading(false);
  }, []);
  return (
    <>
      {pageLoading ? (
        <Loader />
      ) : (
        <Grid container style={{ height: "100vh", overflow: "hidden" }}>
          <Grid
            item
            xs={6}
            className={`${classes.backImage} blur`}
            style={{
              backgroundImage: `url(${BackImage})`,
              backgroudSize: "cover",
            }}
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
                          onChange={handleEmailChange}
                          className={classes.input}
                          placeholder="Username"
                        ></input>
                      </Grid>
                      <Grid item>
                        <input
                          type="password"
                          onChange={handlePasswordChange}
                          onKeyDown={handleKeyDown}
                          className={classes.input}
                          placeholder="password"
                        ></input>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <button
                      className={classes.btn}
                      onClick={() => onSubmitLogin()}
                    >
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : (
                        "Login"
                      )}
                      {!loading && (
                        <ArrowForwardIcon
                          style={{
                            position: "absolute",
                            right: "14px",
                            top: "11px",
                          }}
                        />
                      )}
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={message}
            onClose={handleClose}
            message={message}
            autoHideDuration={3000}
            key={open}
          />
        </Grid>
      )}
    </>
  );
};

export default LoginPage;
