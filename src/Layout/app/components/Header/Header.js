import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  ExitToApp as ExitToAppIcon,
  Palette as PaletteIcon,
} from "@material-ui/icons";

//local imports
import { useHeaderStyles } from "./style";

const Header = () => {
  const classes = useHeaderStyles();


  const [anchorEl, setAnchorEl] = useState(null);
  // eslint-disable-next-line
  const open = Boolean(anchorEl);
  const [open1, setOpen1] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleLogout = () => {};

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List>
        <ListItem button onClick={handleMenu} className={classes.loginList}>
          <div className={classes.subList}>
            <ListItemText
              primary={
                <Typography type='body2' className={classes.userNameToolbar}>
                  
                </Typography>
              }
              secondary={
                <Typography type='caption' className={classes.usertypeToolbar}>
                 
                </Typography>
              }
              className={classes.userListToolbar}
            />
          </div>
          {open ? (
            <ExpandLess className={classes.appBarExpandIcon} />
          ) : (
            <ExpandMore className={classes.appBarExpandIcon} />
          )}
        </ListItem>
      </List>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}>
        <MenuItem onClick={handleLogout}>
          <ExitToAppIcon className={classes.logoutIcon} /> Logout
        </MenuItem>

        <List>
          <ListItem button onClick={handleClick1}>
            <ListItemIcon>
              <PaletteIcon className={classes.paletteIcon} />
            </ListItemIcon>
            <ListItemText
              primary='Theme Color'
              className={classes.toolbarListText}
            />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </List>
      </Menu>
    </>
  );
};

export default Header;
