/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ExpandLess as IconExpandLess,
  ExpandMore as IconExpandMore,
} from "@material-ui/icons";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
} from "@material-ui/core";

// local imports
import Logo from "../../../../common/Assets/loginImage/logo.png";
import { useSidebarStyles } from "./style";

// import myConsole from '../common/myConsoleLog';

function getItemsAll(items) {
  return items.reduce((allItems, item) => {
    // let res = allItems.concat([item])

    if (item.items && item.items.length) {
      return allItems.concat([item], getItemsAll(item.items));
    } else {
      return allItems.concat([item]);
    }
  }, []);
}

const SideBarList = (props) => {
  const { name, icon, items = [], path, handleDrawerClose } = props;
  const location = useLocation();
  const isLinkActive = path && location.pathname === path;
  const classes = useSidebarStyles();
  const isExpandable = items && items.length > 0;
  const itemsAll = getItemsAll(items);
  const isChildLinkActive =
    isExpandable &&
    itemsAll.filter((item) => item.path === location.pathname).length > 0;
  const isOpen = isChildLinkActive || false;
  const [openList, setOpenList] = React.useState(isOpen);

  function handleClick() {
    isExpandable ? "" : handleDrawerClose();
    setOpenList(!openList);
  }

  const MenuItemRoot = (
    <ListItem
      button
      component={path && Link}
      to={path}
      className={classes.menuItem}
      onClick={handleClick}
      selected={isLinkActive}
      classes={{
        button: classes.listItemButton,
      }}
    >
      <div className={classes.icon}>{icon}</div>
      <ListItemText primary={name} className={classes.listitemText} />

      {isExpandable && !openList && <IconExpandMore />}
      {isExpandable && openList && <IconExpandLess />}
    </ListItem>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={openList} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <div
          style={{
            backgroundColor: "#fff",
            zIndex: "999",

            borderRadius: "1px 1px 20px 20px",
          }}
          className={classes.sublist}
        >
          {items.map((item, index) => (
            <Sublist
              {...item}
              key={index}
              handleDrawerClose={handleDrawerClose}
            />
          ))}
        </div>
      </List>
    </Collapse>
  ) : null;
  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};
const Sublist = (props) => {
  const { name, icon, path, handleDrawerClose } = props;
  const location = useLocation();
  const isLinkActive = path && location.pathname === path;
  const classes = useSidebarStyles();

  function handleClick() {
    handleDrawerClose();
  }

  return (
    <>
      <ListItem
        button
        component={path && Link}
        to={path}
        onClick={handleClick}
        className={classes.sublist}
        selected={isLinkActive}
        classes={{
          selected: classes.listItemSelected,
          button: classes.listItemButtonNested,
          sublist: classes.sublist,
        }}
      >
        <ListItemText className={classes.subListText} primary={name} />
      </ListItem>
      <Divider />
    </>
  );
};

export default SideBarList;
