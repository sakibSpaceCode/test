import React from "react";

import "./styles/projectOverview.css";

import HeaderBox from "../../components/headerBox";
import CustomTable from "../../components/CustomTable";
import { Grid } from "@material-ui/core";

function createData(
  ProjectId,
  Pname,
  Pmanager,
  Dname,
  Status,
  EndDate,
  Timeline
) {
  return { ProjectId, Pname, Pmanager, Dname, Status, EndDate, Timeline };
}

const rows = [
  createData(
    "Project1",
    " Name1",
    "jhon Micheal",
    "joinery",
    "Completed",
    "21 june 2022",
    "50%"
  ),
  createData(
    "Project1 ",
    "Name1",
    "jhon Micheal",
    "joinery",
    "Completed",
    "21 june 2022",
    "50%"
  ),
  createData(
    "Project1",
    " Name1",
    "jhon Micheal",
    "joinery",
    "Completed",
    "21 june 2022",
    "50%"
  ),
  createData(
    "Project1",
    " Name1",
    "jhon Micheal",
    "joinery",
    "Completed",
    "21 june 2022",
    "50%"
  ),
  createData(
    "Project1 ",
    "Name1",
    "jhon Micheal",
    "joinery",
    "Completed",
    "21 june 2022",
    "50%"
  ),
  createData(
    "Project1 ",
    "Name1",
    "jhon Micheal",
    "joinery",
    "Completed",
    "21 june 2022",
    "50%"
  ),
];

function ProjectOverview() {
  return (
    <HeaderBox title="Project Overview Layout">
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="column">
            <Grid item className="projectContainer">
              <h4 style={{ fontSize: "18px" }}>This Week</h4>
            </Grid>
            <Grid item>
              <CustomTable height={280} />
            </Grid>
            <Grid item className="projectContainer">
              <h4 style={{ fontSize: "18px" }}>Next Week</h4>
            </Grid>
            <Grid item>
              <CustomTable height={280} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </HeaderBox>
  );
}

export default ProjectOverview;
