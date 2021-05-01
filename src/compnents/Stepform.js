import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import ErrorIcon from '@material-ui/icons/Error';
import Tooltip from '@material-ui/core/Tooltip'
import OfflineBoltRoundedIcon from '@material-ui/icons/OfflineBoltRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function getSteps() {
  return ['', '', ''];
}


export default function HorizontalLinearStepper() {
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
    <div className="container">
    <form>
     { activeStep === 0 && (
        <div>
         <h1>Standby generator information</h1>
         <h2>Step 1: Add Generators</h2>
        </div>
     )}
    { activeStep === 1 && (
      <div>
        <h1>Standby generator information</h1>
        <h2>Step 2: Generators Details</h2>
      </div>
     )}
    { activeStep === 2 && (
        <div>
         <h1>Title</h1>
         <h2>Step 3: Review & Confirm</h2>
        </div>
     )}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        { activeStep === 0 && (
          <div>
            <div>
                <fieldset>
                    <label>
                        Specify the generator facility operating mode:
                    </label>
                    <FormControl variant="filled">
                        <InputLabel>Select</InputLabel>
                        <Select>
                            <MenuItem value="1"> 
                                Isolated Operation
                            </MenuItem>
                        </Select>
                    </FormControl>
                </fieldset>
                <fieldset>
                    <label>
                        How will this generating facility be operated:
                    </label>
                    <FormControl variant="filled">
                        <InputLabel>Select</InputLabel>
                        <Select>
                            <MenuItem value="1"> 
                                Peak Shaving/Demand Management
                            </MenuItem>
                        </Select>
                    </FormControl>
                </fieldset>
            </div>
            <div className="action-btn">
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Cancel
              </Button>
             
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
            
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
        { activeStep === 1 && (
          <div>
             <div>
                <p>Posuere erat nulia hendrerit quies magnis sociosqu cubillia pulvinar vel primis, nec viverra molestie commodo inceptos rhoncus</p>
                <fieldset>
                    <label>
                        Generator/inverter model (name/number)
                        <Tooltip title="tooltip" placement="bottom">
                           <ErrorIcon />
                        </Tooltip>
                    </label>
                    <TextField value="Westinghouse WGen7500DF" variant="filled" />
                </fieldset>
                <fieldset>
                    <label>
                        Generator/inverter Software Version (Number)
                        <Tooltip title="tooltip" placement="bottom">
                           <ErrorIcon />
                        </Tooltip>
                    </label>
                    <TextField value="2.1" variant="filled" />
                </fieldset>
                <fieldset>
                    <label>
                        Gross nameplate rating
                        <Tooltip title="tooltip" placement="bottom">
                           <ErrorIcon />
                        </Tooltip>
                    </label>
                    <TextField  value="888 kVA" variant="filled" />
                </fieldset>
                <fieldset>
                    <label>
                        Prime mover type
                        <Tooltip title="tooltip" placement="bottom">
                           <ErrorIcon />
                        </Tooltip>
                    </label>
                    <FormControl variant="filled">
                        <InputLabel>Select</InputLabel>
                        <Select>
                            <MenuItem value="1"> 
                                Wind Turbine
                            </MenuItem>
                        </Select>
                    </FormControl>
                </fieldset>
            </div>
            <div className="action-btn more-btns">
              <Button onClick={handleBack} className="back-btn">
                Back
              </Button>
             
              <div class="right-side-btn">
                  <Button
                    variant="contained"
                    color="primary"
                    className="save-btn"
                  >
                  Save
                  </Button>
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
              
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          </div>
        )}
         { activeStep === 2 && (
          <div>
            <div>
              <fieldset>
                      <label>Generator information summary</label>
              </fieldset>
              <ul>
                <li>
                  <span>
                    <OfflineBoltRoundedIcon />
                  </span>
                  <div className="right-content">
                    <h4>Generating Facility Operating Mode</h4>
                    <p>Isolated Operation</p>
                  </div>
                </li>
                <li>
                  <span>
                    <ErrorIcon />
                  </span>
                  <div className="right-content">
                    <h4>Generating Facility Method</h4>
                    <p>Peak Shaving/Demand Management</p>
                  </div>
                </li>
                <li>
                  <span>
                    <ErrorIcon />
                  </span>
                  <div className="right-content">
                    <h4>Generating/inverter Model</h4>
                    <p>Westinghouse WGen 7500DF</p>
                  </div>
                </li>
                <li>
                  <span>
                    <ErrorIcon />
                  </span>
                  <div className="right-content">
                    <h4>Generating/inverter Software Version</h4>
                    <p>2.1</p>
                  </div>
                </li>
                <li>
                  <span>
                    <AssignmentTurnedInRoundedIcon />
                  </span>
                  <div className="right-content">
                    <h4>Gross Nameplate Rating</h4>
                    <p>8888 kVA</p>
                  </div>
                </li>
                <li>
                  <span>
                    <ErrorIcon />
                  </span>
                  <div className="right-content">
                    <h4>Prime Mover Type</h4>
                    <p>Wind Turbine</p>
                  </div>
                </li>
              </ul>
              <FormControlLabel
                className="checkbox-control"
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                  />
                }
                label="I agree to the Terms & Condition"
              />
            </div>
            <div className="action-btn more-btns">
              <Button onClick={handleBack} className="back-btn">
                Back
              </Button>
             
              <div class="right-side-btn">
                  <Button
                    variant="contained"
                    color="primary"
                    className="save-btn"
                  >
                  Save
                  </Button>
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
              
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          </div>
        )}
        {activeStep === steps.length && (
          <div>
            <div className="check-icon">
              <CheckCircleIcon />
              <h4>Success!</h4>
              <p>Thank you! We have recieved your information. An email confirmation has been sent to joe.doe@utilityco.com</p>
            </div>
             <ul>
                <li>
                  <span>
                    <OfflineBoltRoundedIcon />
                  </span>
                  <div className="right-content">
                    <h4>Generating Facility Operating Mode</h4>
                    <p>Isolated Operation</p>
                  </div>
                </li>
                <li>
                  <span>
                    <ErrorIcon />
                  </span>
                  <div className="right-content">
                    <h4>Generating Facility Method</h4>
                    <p>Peak Shaving/Demand Management</p>
                  </div>
                </li>
                <li>
                  <span>
                    <ErrorIcon />
                  </span>
                  <div className="right-content">
                    <h4>Generating/inverter Model</h4>
                    <p>Westinghouse WGen 7500DF</p>
                  </div>
                </li>
                <li>
                  <span>
                    <ErrorIcon />
                  </span>
                  <div className="right-content">
                    <h4>Generating/inverter Software Version</h4>
                    <p>2.1</p>
                  </div>
                </li>
                <li>
                  <span>
                    <AssignmentTurnedInRoundedIcon />
                  </span>
                  <div className="right-content">
                    <h4>Gross Nameplate Rating</h4>
                    <p>8888 kVA</p>
                  </div>
                </li>
                <li>
                  <span>
                    <ErrorIcon />
                  </span>
                  <div className="right-content">
                    <h4>Prime Mover Type</h4>
                    <p>Wind Turbine</p>
                  </div>
                </li>
              </ul>
            <div className="final-button action-btn">
            <Button variant="contained" color="primary" onClick={handleReset}>
              Done
            </Button>
            </div>
          </div>
        )} 
      </div>
    </form>
    </div>
  );
}