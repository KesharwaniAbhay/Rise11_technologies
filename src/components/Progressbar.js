import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import '../mediaQuery/Progressbar.css'; // Ensure to import the CSS file

const steps = [
  "Preliminary", 
  "Your Details", 
  "KYC", 
  "Parties", 
  "Claim", 
  "Review", 
  "Payment"
];

const Progressbar = () => {
  return (
    <div className="progressbar-container">
      <Stepper activeStep={3} alternativeLabel className="stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel className="step-label">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Progressbar;
