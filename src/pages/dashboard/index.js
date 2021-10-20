import React from "react";
import Cards from "./card";
import Active from "../../common/Assets/dashboardImage/setting.png";
import duration from "../../common/Assets/dashboardImage/duration.png";
import final from "../../common/Assets/dashboardImage/final.png";
import paint from "../../common/Assets/dashboardImage/paint.png";
import Delivered from "../../common/Assets/dashboardImage/delivered.png";

import state1 from "../../common/Assets/progressive/1.png";

import { Grid } from "@material-ui/core";
import ProgressBar from "./progressBar";

const DashboardPage = () => {
  return (
    <>
      <Grid container justify="space-between">
        <Grid item>
          <Cards image={Active} number="30" status="Active Projects" />
        </Grid>
        <Grid item>
          <Cards
            image={duration}
            number="25"
            status="Active Projects in Subassembly"
          />
        </Grid>
        <Grid item>
          <Cards image={final} number="54" status=" Paint" />
        </Grid>
        <Grid item>
          <Cards image={paint} number="100" status=" Final Assembly" />
        </Grid>
        <Grid item>
          <Cards image={Delivered} number="32" status="Delivery" />
        </Grid>
      </Grid>
      <Grid container>
        <ProgressBar pname="Project1" pname2="Project2" pname3="Project3" />
      </Grid>
    </>
  );
};

export default DashboardPage;
