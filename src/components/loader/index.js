import { Grid } from "@material-ui/core";
import React from "react";
import LoaderSvg from "../../common/Assets/loader.svg";

const Loader = () => {
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <svg
        style={{
          margin: "auto",

          display: "block",
          shapeRendering: "auto",
        }}
        width="150px"
        height="150px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="22"
          stroke-width="6"
          stroke="#303030"
          stroke-dasharray="34.55751918948772 34.55751918948772"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1.2195121951219512s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="15"
          stroke-width="6"
          stroke="#774023"
          stroke-dasharray="23.561944901923447 23.561944901923447"
          stroke-dashoffset="23.561944901923447"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1.2195121951219512s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50;-360 50 50"
          ></animateTransform>
        </circle>
      </svg>
      ;
    </Grid>
  );
};

export default Loader;