import React from "react";

import data from "../../JSON/drawer.json";
import "font-awesome/css/font-awesome.min.css";

export default function routes() {
  const filteredData = data?.filter(
    (d) => d.isDrawer === false || d.isDrawer === undefined
  );
  let mObj = [];
  for (let objElement of filteredData) {
    let drawerOption = {};
    drawerOption.name = objElement.name;
    drawerOption.path = objElement.path;
    drawerOption.icon = (
      <i
        className={objElement.icon}
        style={{ fontSize: 20 }}
        aria-hidden='true'
      />
    );
    drawerOption.items = objElement.items;
    mObj.push(drawerOption);
  }
  return mObj;
}
