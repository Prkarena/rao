
/**
 * Slider Template : 
 * install react-bootstrap bootstrap :  npm install react-bootstrap bootstrap
 * 
 */

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

 const SliderTemplate = (props) => {

  const tutorialSteps = props.data ;
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
 
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }
      return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.id} className={classes.subroot}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div
                   className = {classes.img}
                    style ={{
                        background : `url(../images/articles/${step.image})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        position: 'relative',
                    }}
                ></div>
            ) : null}
            
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      variant="dots"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
       }
        backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
            </Button>
        }
        />
    </div>
  );
}


const useStyles = makeStyles( theme => ({
    root: {
      flexGrow: 1,
    },
    subroot: {
        width: '100%',
    },
    img: {  
      height : 250,
      [theme.breakpoints.up('sm')]: {
        height: 450,
      },
    },
  }));
  
export default SliderTemplate;
