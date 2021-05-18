import React from "react";
import { Image, FormControl } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import Rate from "../components/Rate";
import { useAddtoCart } from "../helpefunctions/cart";
import { Link, withRouter } from "react-router-dom";
import { deleteItem } from "../store/actions/cart";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";

const CartItem = ({ title, id, image, qty, price, ratings, numStock }) => {
  const { addToCartHandler } = useAddtoCart();

  const dispatch = useDispatch();
  return (
    <div
      className=" py-3 px-3  d-flex justify-content-between mt-2  "
      style={{
        color: "#D8D8D8",
        backgroundColor: "transparent",
        border: "1px solid rgba(0,0,0,0.6)",
        boxShadow: "0px 0px 8px  rgba(0,0,0,0.6)",
      }}
    >
      {/* CART IMAGE COLUMN */}
      <div className="d-flex align-items-center" style={{ height: "100%" }}>
        <Image
          rounded
          src={image}
          alt="item image"
          fluid
          style={{ height: "70px" }}
        />
        {/* PRODUCT NAME COLUMN */}
      </div>
      <div>
        <Link to={`/products/${id}`}>
          <h3 className="text-capitalize">{title}</h3>
        </Link>
        <Rate numRate={ratings} />
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          {numStock > 0 ? "In stock" : "Out of stock"}
        </span>
      </div>
      {/* PRODUCT PRICE COLUMN */}
      <div className="d-flex flex-column">
        <h3>R {price.toFixed(2)}</h3>
        <div className="d-flex">
          <span className="mr-3">Qty:</span>
          <FormControl
            as="select"
            onChange={(e) => {
              addToCartHandler({
                title,
                id,
                image,
                qty: +e.target.value,
                price,
                ratings,
                numStock,
              });
            }}
            style={{ backgroundColor: "transparent" }}
            value={qty}
          >
            {[...Array(numStock)].map((option, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </FormControl>
        </div>
      </div>
      <div>
        <IconButton
          style={{ outline: "none", color: "red" }}
          onClick={() => {
            dispatch(deleteItem({ id, qty }));
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default withRouter(CartItem);
