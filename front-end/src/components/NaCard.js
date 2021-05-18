import React from "react";
import { Card } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router-dom";
import Rate from "./Rate";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { useAddtoList } from "../helpefunctions/user";
import useSnackBar from "../helpefunctions/snackbar";
import MysnackBar from "../components/SnackBar";
import Discount from "../components/Discount";
import { useAddtoCart } from "../helpefunctions/cart";
import useIsAuth from "../helpefunctions/isAuth";
const NaCard = ({
  discountPrice,
  numStock,
  history,
  withRating,
  title,
  discount,
  rating,
  price,
  id,
  image,
}) => {
  const { addToListHandler, loading, error: err, update } = useAddtoList();
  const { setOpen, open } = useSnackBar(err || update);
  const { addToCartHandler } = useAddtoCart();
  const { redirectHandler } = useIsAuth();
  return (
    <div className="na_card_wrapper  ">
      {discount > 0 && <Discount />}
      <MysnackBar
        setOpen={setOpen}
        open={open}
        severity={err !== null ? "error" : "success"}
      >
        {update}
        {err}
      </MysnackBar>
      <Card
        className=" p-2 text-white  "
        style={{
          color: "white",
          backgroundColor: "transparent",
          border: "1px solid rgba(0,0,0,0.6)",
          boxShadow: "0px 0px 8px  rgba(0,0,0,0.6)",
        }}
      >
        <Card.Img
          onClick={() => {
            history.push(`/products/${id}`);
          }}
          src={image}
          alt={title}
          className=" border rounded p-1 card_img"
        />

        <Card.Title
          onClick={() => {
            history.push(`/products/${id}`);
          }}
          as="div"
          className="text-capitalize  product_title m-0"
          style={{ color: "#D8D8D8" }}
        >
          {title}
        </Card.Title>

        <Card.Title
          as="div"
          className="text-capitalize  product_price  m-0 d-flex flex-column "
          style={{ color: "#D8D8D8" }}
        >
          R {price.toFixed(2)}
          <span
            className="text-decoration-line-through text-muted "
            style={{ fontSize: "1rem", opacity: discountPrice > 0 ? "1" : "0" }}
          >
            <del> R{discountPrice.toFixed(2)}</del>
          </span>
        </Card.Title>

        <div
          className={`${withRating ? "d-block" : "d-none"}`}
          style={{ color: "#D8D8D8" }}
        >
          <Rate numRate={rating} />
        </div>
        <div className="mt-2 nacard_btn d-flex">
          <div className="mt-1 ncart_btn " sm={3}>
            <IconButton
              onClick={() => {
                addToCartHandler({
                  title,
                  image,
                  price,
                  rating,
                  qty: 1,
                  numStock,
                  id,
                });
              }}
              style={{ border: "none", outline: "none" }}
              className=" p-0 mr-2"
            >
              <AddShoppingCartIcon
                style={{
                  color: "#CBCBCB",
                  borderRadius: "50px",
                  fontSize: "1.8rem",
                  backgroundColor: "black",
                }}
                className=" p-1"
              />
            </IconButton>
          </div>
          <div className="mt-1">
            <IconButton
              disabled={loading}
              onClick={() => {
                redirectHandler();
                addToListHandler(id);
              }}
              style={{ border: "none", outline: "none" }}
              className=" p-0"
            >
              <FavoriteIcon
                style={{
                  color: "#CBCBCB",
                  borderRadius: "50px",
                  fontSize: "1.8rem",
                  backgroundColor: "black",
                }}
                className=" p-1"
              />
            </IconButton>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default withRouter(NaCard);
