import React from "react";
import { Image, FormControl } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { useAddtoCart } from "../helpefunctions/cart";
import { Link, withRouter } from "react-router-dom";
import { deleteItem } from "../store/actions/cart";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";

const MobileCartItem = ({
  title,
  id,
  image,
  qty,
  price,
  ratings,
  numStock,
}) => {
  const { addToCartHandler } = useAddtoCart();

  const dispatch = useDispatch();
  return (
    <div
      className="d-flex  p-3 justify-content-between mt-1 "
      style={{
        color: "white",
        backgroundColor: "transparent",
        border: "1px solid rgba(0,0,0,0.6)",
        boxShadow: "0px 0px 8px  rgba(0,0,0,0.6)",
      }}
    >
      <div className="d-flex align-items-center">
        <Image
          rounded
          src={image}
          fluid
          alt={title}
          style={{ height: "100px" }}
        />
      </div>

      <div className="d-flex flex-column ml-1">
        <Link to={`/products/${id}`}>
          <div style={{ fontWeight: "bold" }}>{title}</div>
        </Link>
        <h5 style={{ fontWeight: "bold" }}>R {price.toFixed(2)}</h5>
        <div style={{ fontWeight: "bold" }}>
          {numStock > 0 ? "in Stok" : "Out of Stock"}
        </div>
        <div className="d-flex mt-2">
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

export default withRouter(MobileCartItem);
