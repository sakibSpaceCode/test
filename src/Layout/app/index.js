import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Divider,
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
  List,
  Tooltip,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Badge from "@material-ui/core/Badge";
// local imports
import { useDashboardStyles } from "./style";
import AppRoutes from "../../routes/AppRoutes";
import SideBarList from "./components/SideBar/SideBarList";
// import Alert from './components/alert/alert.container';
import Logo from "../../common/Assets/loginImage/logo.png";

import routes from "./routes";
import SimpleBreadcrumbs from "../../components/breadcrumbs/breadcrumbs.container";

import "font-awesome/css/font-awesome.min.css";
import { logout } from "../../redux/actions/authActions";
import { getNotifications } from "../../redux/actions/commonGetDataActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const classes = useDashboardStyles();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [invisible, setInvisible] = React.useState(true);
  const { postResponse } = useSelector((state) => state.postFields);
  const { putResponse } = useSelector((state) => state.putFields);
  const { notifications } = useSelector((state) => state.getNotifications);

  useEffect(() => {
    postResponse?.success === true ? setInvisible(false) : setInvisible(true);
    postResponse?.success === true && dispatch(getNotifications());
  }, [postResponse]);
  useEffect(() => {
    putResponse?.success === true && dispatch(getNotifications());
    putResponse?.success === true ? setInvisible(false) : setInvisible(true);
  }, [putResponse]);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  console.log("notifications", postResponse?.success);
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  let url = location.pathname.split("/");
  let filterUrl = url.filter((x, i) => i < 4);
  const { userInfo } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (userInfo.data) setLoading(true);

    return () => {};
  }, [userInfo.data]);

  let appBarUrl = filterUrl.join("/");

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerNavigationKey = (e) => {
    const active = document.activeElement;
    if (e.keyCode === 40 && active.nextSibling) {
      active.nextSibling.focus();
    }
    if (e.keyCode === 38 && active.previousSibling) {
      active.previousSibling.focus();
    }
  };
  const drawerOpenCloseKey = (event) => {
    if (event.ctrlKey && event.keyCode === 68) {
      setOpen(!open);
      event.preventDefault();
      event.stopPropagation();
    }
  };
  React.useEffect(() => {
    document.addEventListener("keydown", drawerOpenCloseKey, true);
    open && document.addEventListener("keydown", drawerNavigationKey, true);
    return () => {
      document.removeEventListener("keydown", drawerOpenCloseKey, true);
      document.removeEventListener("keydown", drawerNavigationKey, true);
    };
  }, [open]);

  const drawerRoutes = routes();
  const drawer = (
    <>
      <div className={classes.logoContainer}>
        <img src={Logo} alt='logo' className={classes.logo} />
      </div>
      <List className={classes.list}>
        {drawerRoutes?.map((item, index) =>
          userInfo?.data?.permissions?.map((val) => {
            if (val.name == item.name) {
              return (
                <SideBarList
                  {...item}
                  key={index}
                  path={item.path}
                  open={open}
                  handleDrawerOpen={handleDrawerOpen}
                  handleDrawerClose={handleDrawerClose}
                  setOpen={setOpen}
                />
              );
            }
          })
        )}
      </List>
    </>
  );
  const handlelogoutClick = () => {
    setOpenProfile(null);
    dispatch(logout());
  };

  return (
    <>
      {loading && (
        <div className={classes.root}>
          <Drawer
            variant='permanent'
            className={classes.drawer}
            onClose={handleDrawerOpen}
            anchor='left'
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}>
            {drawer}
          </Drawer>
          <div style={{ width: "100%", overflowX: "hidden" }}>
            <main
              style={{
                width: "calc(100% - 20px)",
                height: "102.5vh",
                borderRadius: "25px 25px 0 0",
                position: "relative",

                overFlowX: "hidden",

                marginTop: 20,
                backgroundColor: "#e5e5e5",
              }}>
              <div
                style={{
                  flexGrow: 1,
                  position: "sticky",
                  top: 0,
                  zIndex: 999,
                }}>
                <AppBar className={classes.appBar} position='sticky'>
                  <Toolbar>
                    <div className={classes.breadcrumbs}>
                      <SimpleBreadcrumbs name={appBarUrl} />
                    </div>
                    <IconButton>
                      <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={handleClickNotification}>
                      <Badge
                        color='primary'
                        variant='dot'
                        invisible={invisible}>
                        <NotificationsNoneOutlinedIcon />
                      </Badge>
                    </IconButton>
                    <Poppers
                      open={Boolean(openNotification)}
                      anchorEl={openNotification}
                      transition
                      disablePortal
                      // className={
                      //   classNames({ [classes.popperClose]: !openNotification }) +
                      //   " " +
                      //   classes.popperNav
                      // }
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          id='notification-menu-list-grow'
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}>
                          <Paper>
                            <ClickAwayListener
                              onClickAway={handleCloseNotification}>
                              {notifications?.length > 0 ? (
                                <MenuList role='menu'>
                                  {notifications?.map((notification) => (
                                    <MenuItem
                                      onClick={handleCloseNotification}
                                      className={classes.dropdownItem}>
                                      {notification.Description}
                                    </MenuItem>
                                  ))}
                                </MenuList>
                              ) : (
                                <MenuList role='menu'>
                                  <MenuItem
                                    onClick={handleCloseNotification}
                                    className={classes.dropdownItem}>
                                    No new notifications
                                  </MenuItem>
                                </MenuList>
                              )}
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Poppers>
                    <IconButton onClick={handleClickProfile}>
                      <AccountCircleOutlinedIcon />
                    </IconButton>
                    <Poppers
                      open={Boolean(openProfile)}
                      anchorEl={openProfile}
                      transition
                      disablePortal
                      // className={
                      //   classNames({ [classes.popperClose]: !openProfile }) +
                      //   " " +
                      //   classes.popperNav
                      // }>
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          id='profile-menu-list-grow'
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}>
                          <Paper>
                            <ClickAwayListener onClickAway={handleCloseProfile}>
                              <MenuList role='menu'>
                                <MenuItem
                                  onClick={handlelogoutClick}
                                  className={classes.dropdownItem}>
                                  Logout
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Poppers>
                  </Toolbar>
                </AppBar>
              </div>
              <div className={classes.mainRoutes}>
                <AppRoutes />
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
