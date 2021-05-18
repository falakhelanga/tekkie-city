import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const ThankYou = ({ handleReset }) => {
  const history = useHistory();
  return (
    <div className="text-center bg-white p-3">
      <h1 className="text-success">Thank You</h1>
      <h3 className="text-success">Your Order Has Been placed successfully</h3>
      <p>You will recieve an email when your order has been delevered</p>
      <Button
        onClick={() => {
          history.push("/");
        }}
        style={{ border: "1px solid white", color: "white" }}
        className="bg-dark"
      >
        Back to home
      </Button>
    </div>
  );
};

export default ThankYou;
