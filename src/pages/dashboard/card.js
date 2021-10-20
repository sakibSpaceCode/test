import { Grid } from "@material-ui/core";
import React from "react";
import "./styles/card.css";

function Cards(props) {
  return (
    <Grid container spacing={1} wrap={"nowrap"} className="cardContainer">
      <Grid item>
        <img src={props.image} className="cardImg" />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          className="detailCard"
        >
          <Grid item>
            <span className="cardNumber">{props.number}</span>
          </Grid>
          <Grid item>
            <span className="cardSubText">{props.status}</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Cards;
