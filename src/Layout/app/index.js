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
  Typography,
  Button,
} from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
// local imports
import { useDashboardStyles } from "./style";
import AppRoutes from "../../routes/AppRoutes";
import SideBarList from "./components/SideBar/SideBarList";
// import Alert from './components/alert/alert.container';
import Logo from "../../common/Assets/loginImage/logo.png";

import routes from "./routes";
import SimpleBreadcrumbs from "../../components/breadcrumbs/breadcrumbs.container";

import "font-awesome/css/font-awesome.min.css";

const Dashboard = () => {
  const location = useLocation();
  const classes = useDashboardStyles();
  const [open, setOpen] = useState(false);

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
      <div className={classes.logoContainer}>
        <img src={Logo} alt="logo" className={classes.logo} />
      </div>
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

  return (
    <>
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          className={classes.drawer}
          onClose={handleDrawerOpen}
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
        <div style={{ width: "100%", overflowY: "auto" }}>
          <main
            style={{
              width: "calc(100% - 20px)",
              height: "97vh",
              borderRadius: "25px 25px 0 0",

              marginTop: 20,
              backgroundColor: "#e5e5e5",
            }}
          >
            <div style={{ flexGrow: 1 }}>
              <AppBar className={classes.appBar} position="sticky">
                <Toolbar>
                  <div className={classes.breadcrumbs}>
                    <SimpleBreadcrumbs name={appBarUrl} />
                  </div>
                  <IconButton>
                    <ChatBubbleOutlineOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <NotificationsNoneOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </div>
            <div className={classes.mainRoutes}>
              <AppRoutes />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
