import React, { useState, useEffect } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useAddtoCart } from "../helpefunctions/cart";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const AddToCartBtn = ({ product, history }) => {
  const [smallDiv, setSmallDiv] = useState(false);
  const { products } = useSelector((state) => state.cart);
  const { title, image, price, ratings, numStock, id } = product;

  useEffect(() => {
    if (products.length > 0) setSmallDiv((currValue) => true);
  }, [products]);
  const { addToCartHandler } = useAddtoCart();
  return (
    <>
      {!smallDiv ? (
        <button
          onClick={() => {
            addToCartHandler({
              title,
              image,
              price,
              ratings,
              qty: 1,
              numStock,
              id,
            });
          }}
          className="addtocartbtn_wrapper mx-2 d-flex justify-content-center align-items-center text-capitalize"
        >
          <span className="mr-2">add to cart</span>
          <AddShoppingCartIcon />
        </button>
      ) : (
        <button
          onClick={() => {
            addToCartHandler({
              title,
              image,
              price,
              ratings,
              qty: 1,
              numStock,
              id,
            });
          }}
          className="addtocartbtn_wrapper2  mx-2 d-flex justify-content-center align-items-center text-capitalize"
        >
          <AddIcon />
          <ShoppingCartIcon />
        </button>
      )}

      <CSSTransition
        mountOnEnter
        in={smallDiv}
        timeout={{
          enter: 1000,
          exit: 1000,
        }}
        classNames={{
          enter: "",
          enterActive: "show_gotocart",
          enterDone: "hide_cart",
          exit: "",
          exitActive: "",
          exitDone: "",
        }}
      >
        <button
          onClick={() => {
            history.push("/cart");
          }}
          className="gotocart_wrapper mx-2 d-flex justify-content-center align-items-center text-capitalize"
        >
          <ArrowForwardIcon fontSize="small" />
          <span
            className="ml-2"
            style={{
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            go to cart
          </span>
        </button>
      </CSSTransition>
    </>
  );
};

export default withRouter(AddToCartBtn);
