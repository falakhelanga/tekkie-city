import React from "react";
import { Container } from "react-bootstrap";
import CheckotBtn from "./CheckotBtn";

const MobileCheckOutBtn = ({ totalPrice }) => {
  return (
    <Container
      fluid
      className="d-flex d-md-none flex-column w-100 align-items-center justify-content-between py-1"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        backgroundColor: "#2c3e50",
        color: "white",
        height: "100px",
        boxShadow: "0px 2px 15px rgba(0,0,0,1)",
        zIndex: "10",
      }}
    >
      <div className="d-flex w-100 justify-content-between">
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          TOTAL:
        </span>
        <h3>R {totalPrice.toFixed(2)}</h3>
      </div>
      <CheckotBtn />
    </Container>
  );
};

export default MobileCheckOutBtn;
