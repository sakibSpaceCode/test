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
import EventUpcoming from "./eventUpcoming";

const progressData = [
  {
    name: "Project 1",
    data: [
      {
        label: "Design  Process",
        status: "Completed",
      },
      {
        label: "Joinery",
        status: "Completed",
      },
      {
        label: "Metal",
        status: "Completed",
      },
      {
        label: "Paint",
        status: "Completed",
      },
      {
        label: "Final",
        status: "Completed",
      },
      {
        label: "Dispatch",
        status: "Completed",
      },
      {
        label: "Delivery",
        status: "Completed",
      },
      {
        label: "Installation",
        status: "Completed",
      },
      {
        label: "Handover",
        status: "active",
      },

      {
        label: "Completed",
        status: "pending",
      },
    ],
  },
  {
    name: "Project 1",
    data: [
      {
        label: "Design  Process",
        status: "Completed",
      },
      {
        label: "Joinery",
        status: "Completed",
      },
      {
        label: "Metal",
        status: "Completed",
      },
      {
        label: "Paint",
        status: "Completed",
      },
      {
        label: "Final",
        status: "Completed",
      },
      {
        label: "Dispatch",
        status: "Completed",
      },
      {
        label: "Delivery",
        status: "Completed",
      },
      {
        label: "Installation",
        status: "Completed",
      },
      {
        label: "Handover",
        status: "Completed",
      },

      {
        label: "Completed",
        status: "active",
      },
    ],
  },
  {
    name: "Project 1",
    data: [
      {
        label: "Design  Process",
        status: "Completed",
      },
      {
        label: "Joinery",
        status: "Completed",
      },
      {
        label: "Metal",
        status: "Completed",
      },
      {
        label: "Paint",
        status: "Completed",
      },
      {
        label: "Final",
        status: "Completed",
      },
      {
        label: "Dispatch",
        status: "Completed",
      },
      {
        label: "Delivery",
        status: "Completed",
      },
      {
        label: "Installation",
        status: "Completed",
      },
      {
        label: "Handover",
        status: "Completed",
      },

      {
        label: "Completed",
        status: "Completed",
      },
    ],
  },
];

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
        <ProgressBar data={progressData} />
      </Grid>
      <Grid container>
        <EventUpcoming />
      </Grid>
    </>
  );
};

export default DashboardPage;
