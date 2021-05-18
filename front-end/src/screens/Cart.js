import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import MobileCartItem from "../components/MobileCartItem";
import MobileCheckOutBtn from "../components/MobileCheckOutBtn";
import { useSelector } from "react-redux";

const Cart = ({ history }) => {
  const { products, totalPrice } = useSelector((state) => state.cart);
  const totalItems = products.reduce((acc, curr) => +acc + +curr.qty, 0);
  return (
    <Container
      fluid
      className="cart_wrapper "
      style={{
        height: "100%",
        paddingBottom: "3rem",
        marginTop: "3rem",
      }}
    >
      <h3 className=" mt-4" style={{ color: "#D8D8D8" }}>
        Shopping Cart
      </h3>

      {products.length > 0 ? (
        <Row className="d-none d-md-flex">
          {/* CART ITEMS COl */}
          <Col md={8}>
            {/* CART ITEMS COMPONENT */}
            {products.map((product) => (
              <CartItem
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                qty={product.qty}
                numStock={product.numStock}
                ratings={product.ratings}
                id={product.id}
              />
            ))}
          </Col>

          {/* CART TO TOTAL AND CHECKOUT BUTTON */}

          <Col md={3}>
            <div
              className=" p-3 mt-2"
              style={{
                color: "#D8D8D8",
                backgroundColor: "transparent",
                border: "1px solid rgba(0,0,0,0.6)",
                boxShadow: "0px 0px 8px  rgba(0,0,0,0.6)",
              }}
            >
              <h3>Cart Summary</h3>
              <div className="d-flex justify-content-between mt-5">
                <div className="d-flex">
                  {" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    TOTAL:
                  </span>
                  <span className="text-muted ml-1">({totalItems} items)</span>
                </div>
                <h3>R {totalPrice.toFixed(2)}</h3>
              </div>
              <Button
                onClick={() => {
                  history.push("/checkout");
                }}
                type="button"
                variant="dark"
                className="text-capitalize mt-2 btn-block"
              >
                proceed to checkout
              </Button>
            </div>
          </Col>
        </Row>
      ) : (
        <Link to="/" style={{ color: "white" }} className="mt-3">
          <h3>You have no Items in your cart, click here to shop</h3>
        </Link>
      )}

      <div className="d-block d-md-none">
        {products.map((product) => (
          <MobileCartItem
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            qty={product.qty}
            numStock={product.numStock}
            ratings={product.ratings}
            id={product.id}
          />
        ))}
      </div>
      {products.length > 0 && (
        <div>
          <MobileCheckOutBtn totalPrice={totalPrice} />
        </div>
      )}
    </Container>
  );
};

export default Cart;
