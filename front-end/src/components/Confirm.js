import React from "react";
import { Button } from "react-bootstrap";
import AdressConfirm from "./AdressConfirm";
import PaymentConfirm from "./PaymentConfirm";

const Confirm = ({ activeStep, steps, handleBack, handleNext }) => {
  return (
    <div className="bg-white p-3">
      <AdressConfirm />
      <PaymentConfirm />
      <div className="mt-3">
        {activeStep !== 0 && (
          <Button
            onClick={handleBack}
            className="mr-2"
            style={{
              border: "1px solid black",
              color: "white",
              backgroundColor: "black",
            }}
          >
            Back
          </Button>
        )}

        {activeStep === 1 ? (
          <Button
            onClick={() => {
              console.log("pay");
              handleNext();
            }}
            style={{
              border: "1px solid white",
              color: "white",
            }}
            className="bg-dark"
          >
            Pay
          </Button>
        ) : (
          <Button
            style={{ border: "none", color: "white" }}
            className="bg-dark"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Confirm" : "Continiue"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Confirm;
