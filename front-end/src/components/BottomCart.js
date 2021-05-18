import React from "react";
import AddToListBtn from "./AddToListBtn";
import { Container } from "react-bootstrap";
import AddToCartBtn from "./AddToCartBtn";

const BottomCart = ({ handleCart, handleList, id, loading, product }) => {
  return (
    <Container
      fluid
      className="d-flex d-md-none align-items-center"
      style={{
        position: "fixed",
        bottom: "0",
        left: "auto",
        right: "auto",
        width: "100%",
        backgroundColor: "#2c3e50",
        color: "white",
        height: "50px",
        boxShadow: "0px 0px 15px rgba(0,0,0,1)",
        zIndex: "10",
      }}
    >
      <AddToListBtn handleList={handleList} id={id} loading={loading} />
      <AddToCartBtn handleCart={handleCart} product={product} />
    </Container>
  );
};
export default BottomCart;
