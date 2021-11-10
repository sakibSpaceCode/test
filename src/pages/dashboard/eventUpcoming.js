import React, { useState } from "react";
import "./styles/eventUpcoming.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import CustomTable from "../../components/CustomTable";
import { Grid } from "@material-ui/core";
import HeaderBox from "../../components/headerBox";

function EventUpcoming() {
  const [date, setDate] = useState(new Date());
  return (
    <HeaderBox title="Event Upcoming">
      <Grid container className="eventDetail">
        <Grid item xs={4} className="calender">
          <Calendar
            calendarType="Arabic"
            onChange={setDate}
            value={date}
            className="calenderReal"
          />
        </Grid>
        <Grid item xs={8} className="projectList">
          <CustomTable local />
        </Grid>
      </Grid>
    </HeaderBox>
  );
}

export default EventUpcoming;
