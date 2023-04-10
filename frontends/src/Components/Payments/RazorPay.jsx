import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Details from "./Details";
import PaymentMode from "./PaymentMode";
import Success from "./Success";
import PayCard from "./PayCard";
import Footer from "./Footer";
import RentifyName from "../Home/Images/logoImage/rentifyName.jpg";
import HomeNavbar from "../Home/HomeNavbar";
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    height: "50vw",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    iconColor: "#2E3B55",
  },
}));

function getSteps() {
  return ["Enter Details", "Payment Mode", "Payment", "Order Confirmed"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <PaymentMode />;
    case 2:
      return <PayCard />;
    case 3:
      return <Success />;
    default:
      return "Unknown step";
  }
}

export default function Form() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  let Navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, []);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={classes.root} style={{height:'100%'}}>
      <ChakraProvider>
        <HomeNavbar />
      </ChakraProvider>
      {
        window.innerWidth>810?<Card
        style={{ boxShadow: "5px 5px 10px gray",width:'800px',margin:'130px auto' }}
      >
          
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = (
                          <Typography variant="caption"></Typography>
                        );
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.actions}>
                    {activeStep === steps.length ? (
                      <div>
                        <Typography
                          className={classes.instructions}
                        ></Typography>
                        <Button
                          onClick={handleReset}
                          className={classes.button}
                        >
                          Reset
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Typography
                          className={classes.instructions}
                          style={{ height: "350px" }}
                        >
                          {getStepContent(activeStep)}
                          <br />
                        </Typography>
                        <div className={classes.actions}>
                          {activeStep == 3 || activeStep == 0 ? null : (
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                              style={{
                                backgroundColor: "#ff3333",
                                color: "white",
                                width: "100px",
                              }}
                            >
                              Back
                            </Button>
                          )}

                          {activeStep === steps.length - 1 ? (
                            <Button
                              style={{
                                backgroundColor: "teal",
                                color: "white",
                                width: "100px",
                              }}
                              onClick={() => Navigate("/")}
                            >
                              Home
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              className={classes.button}
                              style={{
                                backgroundColor: "teal",
                                color: "white",
                                width: "100px",
                              }}
                            >
                              Next
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>:<Card
        style={{ boxShadow: "5px 5px 10px gray",width:'400px',margin:'130px auto' }}
      >
          
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = (
                          <Typography variant="caption"></Typography>
                        );
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.actions}>
                    {activeStep === steps.length ? (
                      <div>
                        <Typography
                          className={classes.instructions}
                        ></Typography>
                        <Button
                          onClick={handleReset}
                          className={classes.button}
                        >
                          Reset
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Typography
                          className={classes.instructions}
                          style={{ height: "350px" }}
                        >
                          {getStepContent(activeStep)}
                          <br />
                        </Typography>
                        <div className={classes.actions}>
                          {activeStep == 3 || activeStep == 0 ? null : (
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                              style={{
                                backgroundColor: "#ff3333",
                                color: "white",
                                width: "100px",
                              }}
                            >
                              Back
                            </Button>
                          )}

                          {activeStep === steps.length - 1 ? (
                            <Button
                              style={{
                                backgroundColor: "teal",
                                color: "white",
                                width: "100px",
                              }}
                              onClick={() => Navigate("/")}
                            >
                              Home
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              className={classes.button}
                              style={{
                                backgroundColor: "teal",
                                color: "white",
                                width: "100px",
                              }}
                            >
                              Next
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
}
    </div>
  );
}
