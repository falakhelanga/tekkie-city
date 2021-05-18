import React from "react";
import { Container } from "react-bootstrap";

const ProductInformation = ({ description, title, details }) => {
  return (
    <Container
      className="mt-5"
      style={{
        color: "white",
      }}
    >
      <h3 className="text-capitalize">{title}</h3>
      <p>{description}</p>
      <div>{details}</div>
    </Container>
  );
};

export default ProductInformation;
