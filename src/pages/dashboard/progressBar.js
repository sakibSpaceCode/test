import React from "react";
import state1 from "../../common/Assets/progressive/1.png";
import state2 from "../../common/Assets/progressive/2.png";
import state3 from "../../common/Assets/progressive/3.png";
import state4 from "../../common/Assets/progressive/4.png";
import state5 from "../../common/Assets/progressive/5.png";
import state6 from "../../common/Assets/progressive/6.png";
import state7 from "../../common/Assets/progressive/7.png";
import state8 from "../../common/Assets/progressive/8.png";
import state9 from "../../common/Assets/progressive/9.png";
import state10 from "../../common/Assets/progressive/10.png";
import state11 from "../../common/Assets/progressive/11.png";
import "./styles/progressiveBar.css";
import HeaderBox from "../../components/headerBox";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiStepConnector-line": {
      borderColor: theme.palette.primary.main,
    },
    "& .Mui-disabled .MuiStepConnector-line": {
      borderColor: "#959595",
    },
    "& .MuiPaper-root": {
      backgroundColor: "#F4F7FE",
      borderRadius: "0px 0px 20px 20px",
    },
    "&  .MuiStepIcon-root": {
      width: "30px",
      height: "30px",
      //   fill: "#fff",
      //   "&   .MuiStepIcon-root .MuiStepIcon-text": {
      //     fill: "#618EFF",
      //   },
    },
    "&   .MuiStepIcon-active": {
      width: "30px",
      height: "30px",
      //   fill: "#618EFF",
      //   "&  .MuiStepIcon-active text svg .MuiStepIcon-text": {
      //     fill: "#fff",
      //   },
    },
    "& .MuiStepLabel-label.MuiStepLabel-completed": {
      color: theme.palette.primary.main,
      fontSize: "13px",
      fontWeight: "500",
    },
  },
  pending: {
    "&  .MuiStepIcon-root": {
      width: "30px",
      height: "30px",
      fill: "#fff",
    },
    "&   .MuiStepIcon-text": {
      fill: "#618EFF",
    },
    "& .MuiStepLabel-iconContainer": {
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: 50,
    },
  },
  typo: {
    fontWeight: 600,
    marginTop: "-30px",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

export default function ProgressBar({ data }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <HeaderBox title={"Running Projects"}>
        {data.map((value, i) => {
          const active = value.data.findIndex((x) => x.status === "active");
          return (
            <Grid container justify={"space-between"} alignItems="center">
              <Grid item xs={1}>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Typography className={classes.typo} variant="h6">
                      {value.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={11}>
                <Stepper activeStep={active} alternativeLabel>
                  {value.data.map((step) => (
                    <Step
                      className={step.status === "pending" && classes.pending}
                      key={step.label}
                    >
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
            </Grid>
          );
        })}
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
            </div>
          ) : null}
        </div>
      </HeaderBox>
    </div>
  );
}

// function ProgressBar(props) {
//   const state = 6;
//   const stateOne = 9;
//   const stateTwo = 5;
//   return (
//     <HeaderBox title={"Running Projects"}>
//       <div className="details">
//         <h3>{props.pname}</h3>
//         {(() => {
//           switch (state) {
//             case 1:
//               return <img src={state1} alt="pic" className="imgUpdate" />;
//             case 2:
//               return <img src={state2} alt="pic" className="imgUpdate" />;
//             case 3:
//               return <img src={state3} alt="pic" className="imgUpdate" />;
//             case 4:
//               return <img src={state4} alt="pic" className="imgUpdate" />;
//             case 5:
//               return <img src={state5} alt="pic" className="imgUpdate" />;
//             case 6:
//               return <img src={state6} alt="pic" className="imgUpdate" />;
//             case 7:
//               return <img src={state7} alt="pic" className="imgUpdate" />;
//             case 8:
//               return <img src={state8} alt="pic" className="imgUpdate" />;
//             case 9:
//               return <img src={state9} alt="pic" className="imgUpdate" />;
//             case 10:
//               return <img src={state10} alt="pic" className="imgUpdate" />;
//             case 11:
//               return <img src={state11} alt="pic" className="imgUpdate" />;
//           }
//         })()}
//       </div>
//       <div className="details">
//         <h3>{props.pname2}</h3>
//         {(() => {
//           switch (stateOne) {
//             case 1:
//               return <img src={state1} alt="pic" className="imgUpdate" />;
//             case 2:
//               return <img src={state2} alt="pic" className="imgUpdate" />;
//             case 3:
//               return <img src={state3} alt="pic" className="imgUpdate" />;
//             case 4:
//               return <img src={state4} alt="pic" className="imgUpdate" />;
//             case 5:
//               return <img src={state5} alt="pic" className="imgUpdate" />;
//             case 6:
//               return <img src={state6} alt="pic" className="imgUpdate" />;
//             case 7:
//               return <img src={state7} alt="pic" className="imgUpdate" />;
//             case 8:
//               return <img src={state8} alt="pic" className="imgUpdate" />;
//             case 9:
//               return <img src={state9} alt="pic" className="imgUpdate" />;
//             case 10:
//               return <img src={state10} alt="pic" className="imgUpdate" />;
//             case 11:
//               return <img src={state11} alt="pic" className="imgUpdate" />;
//           }
//         })()}
//       </div>
//       <div className="details">
//         <h3>{props.pname3}</h3>
//         {(() => {
//           switch (stateTwo) {
//             case 1:
//               return <img src={state1} alt="pic" className="imgUpdate" />;
//             case 2:
//               return <img src={state2} alt="pic" className="imgUpdate" />;
//             case 3:
//               return <img src={state3} alt="pic" className="imgUpdate" />;
//             case 4:
//               return <img src={state4} alt="pic" className="imgUpdate" />;
//             case 5:
//               return <img src={state5} alt="pic" className="imgUpdate" />;
//             case 6:
//               return <img src={state6} alt="pic" className="imgUpdate" />;
//             case 7:
//               return <img src={state7} alt="pic" className="imgUpdate" />;
//             case 8:
//               return <img src={state8} alt="pic" className="imgUpdate" />;
//             case 9:
//               return <img src={state9} alt="pic" className="imgUpdate" />;
//             case 10:
//               return <img src={state10} alt="pic" className="imgUpdate" />;
//             case 11:
//               return <img src={state11} alt="pic" className="imgUpdate" />;
//           }
//         })()}
//       </div>
//     </HeaderBox>
//   );
// }

// export default ProgressBar;
