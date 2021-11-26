import React from "react";
import Cards from "./card";
import Active from "../../common/Assets/dashboardImage/setting.png";
import duration from "../../common/Assets/dashboardImage/duration.png";
import final from "../../common/Assets/dashboardImage/final.png";
import paint from "../../common/Assets/dashboardImage/paint.png";
import Delivered from "../../common/Assets/dashboardImage/delivered.png";

import state1 from "../../common/Assets/progressive/1.png";

import { Grid, Paper } from "@material-ui/core";
import ProgressBar from "./progressBar";
import EventUpcoming from "./eventUpcoming";
import ProjectOverview from "./projectOverview";
import HeaderBox from "../../components/headerBox";
import CustomTable from "../../components/CustomTable";
import { useStyles } from "./style";
import PieChartSelection from "./pieChart";
import BorderPaper from "../../components/BorderPaper";
import BarChart from "./barChart";

const progressData = [
  {
    name: "Project 1",
    data: [
      {
        label: "Design  Process",
        status: "Completed",
      },
      {
        label: "Procurement ",
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
        label: "Procurement ",
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
        label: "Procurement ",
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
        status: "active",
      },
      {
        label: "Handover",
        status: "pending",
      },

      {
        label: "Completed",
        status: "pending",
      },
    ],
  },
];

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify="space-between">
        <Grid item xs={2} className={classes.root}>
          <Cards image={Active} number="30" status="Active Projects" />
        </Grid>
        <Grid item xs={2} className={classes.root}>
          <Cards
            image={duration}
            number="25"
            status="Active Projects in Subassembly"
          />
        </Grid>
        <Grid item xs={2} className={classes.root}>
          <Cards image={final} number="54" status=" Paint" />
        </Grid>
        <Grid item xs={2} className={classes.root}>
          <Cards image={paint} number="100" status=" Final Assembly" />
        </Grid>
        <Grid item xs={2} className={classes.root}>
          <Cards image={Delivered} number="32" status="Delivery" />
        </Grid>
      </Grid>
      <Grid container>
        <ProgressBar data={progressData} />
      </Grid>
      <Grid container>
        <EventUpcoming />
      </Grid>
      <Grid container>
        <ProjectOverview />
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          <HeaderBox title="Completed Project">
            <CustomTable local />
          </HeaderBox>
        </Grid>
      </Grid>
      <Grid container className={classes.cont}>
        <Grid item xs>
          <BorderPaper>
            <Paper className={classes.pieChart}>
              <BarChart />
            </Paper>
          </BorderPaper>
        </Grid>
      </Grid>
      <Grid container className={classes.cont}>
        <Grid item xs>
          <BorderPaper>
            <Paper className={classes.pieChart}>
              <BarChart />
            </Paper>
          </BorderPaper>
        </Grid>
      </Grid>
      <Grid container className={classes.cont}>
        <Grid item xs>
          <BorderPaper>
            <Paper className={classes.pieChart}>
              <PieChartSelection />
            </Paper>
          </BorderPaper>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
