import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Payment from "./Payment";
import Adress from "./Adress";
import Confirm from "./Confirm";
import ThankYou from "./ThankYou";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
  return ["Delivery", "Payment", "Confirm"];
}

function getStepContent(stepIndex, activeStep, steps, handleBack, handleNext) {
  switch (stepIndex) {
    case 0:
      return (
        <Adress
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 1:
      return (
        <Payment
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    case 2:
      return (
        <Confirm
          activeStep={activeStep}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      );
    default:
      return "Unknown stepIndex";
  }
}

const CheckOutSteps = () => {
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
      <Stepper
        activeStep={activeStep}
        style={{
          height: "35px",

          alignItems: "center",
          color: "white",
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <ThankYou handleReset={handleReset} />
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(
                activeStep,
                activeStep,
                steps,
                handleBack,
                handleNext
              )}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOutSteps;
