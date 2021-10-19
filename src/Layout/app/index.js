import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Divider,
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
  List,
  Tooltip,
} from "@material-ui/core";
import {
  Notifications as NotificationsIcon,
  Refresh as RefreshIcon,
} from "@material-ui/icons";

// local imports
import { useDashboardStyles } from "./style";
import AppRoutes from "../../routes/AppRoutes";
import Header from "./components/Header/Header";
import SideBarList from "./components/SideBar/SideBarList";
// import Alert from './components/alert/alert.container';

import routes from "./routes";
import { SimpleBreadcrumbs, Alert } from "../../components";

import "font-awesome/css/font-awesome.min.css";

const Dashboard = () => {
  const location = useLocation();
  const classes = useDashboardStyles();
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  let url = location.pathname.split("/");
  let filterUrl = url.filter((x, i) => i < 4);
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
      <List className={classes.list}>
        {drawerRoutes?.map((item, index) => (
          <SideBarList
            {...item}
            key={index}
            path={item.path}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            setOpen={setOpen}
          />
        ))}
      </List>
    </>
  );
  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
      <div className={classes.root}>
        <AppBar elevation={0} position='fixed' className={classes.appBar}>
          <Toolbar className={classes.mainToolbar}>
            <div onClick={handleDrawerOpen} className={classes.logoContainer}>
              {/* <img src={logo} alt="logo" className={classes.logo} /> */}
              {/* <Divider className={classes.logoDividerBottom} /> */}
            </div>

            <div className={classes.breadcrumbs}>
              {/* <SimpleBreadcrumbs name={appBarUrl} /> */}
            </div>
            <Tooltip title='Notifications'>
              <IconButton>
                <NotificationsIcon
                  onClick={() => setAlertOpen(!alertOpen)}
                  className={classes.notificationsIcon}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title='Refresh Data'>
              <IconButton>
                <RefreshIcon
                  onClick={refreshPage}
                  className={classes.notificationsIcon}
                />
              </IconButton>
            </Tooltip>

            <Divider
              orientation='vertical'
              flexItem
              className={classes.appBarDivider}
              classes={{ root: classes.divider }}
            />
            <Header />
          </Toolbar>

          <Divider className={classes.appBarDividerBottom} />
        </AppBar>

        
        <Drawer
          variant="permanent"
          className={classes.drawer}
          onClose={handleDrawerOpen}
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}>
          {drawer}
        </Drawer>

        <main onClick={handleDrawerClose} className={classes.content}>
          <div className={classes.toolbar}></div>
          <AppRoutes />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
