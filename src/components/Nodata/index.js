// import React from "react";
import img from "../../common/Assets/no_data.png";

import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "./style";

const NoData = () => {
  const classes = useStyles();
  return (
    <Grid
      conainer
      direction="row"
      align="center"
      spacing={3}
      className={classes.container}
    >
      <img src={img} className={classes.img} />
      <Typography
        color="primary"
        variant="subtitle1"
        className={classes.typography}
      >
        No records found.
      </Typography>
    </Grid>
  );
};

export default NoData;
