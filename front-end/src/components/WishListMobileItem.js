import React from "react";
import { Image } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useAddtoCart } from "../helpefunctions/cart";
import { useDeleteToList } from "../helpefunctions/user";

const MobileItem = ({ title, image, price, id, numStock, ratings }) => {
  const { addToCartHandler } = useAddtoCart();
  const { deleteListHandler } = useDeleteToList();
  return (
    <div
      className="d-flex p-3 justify-content-between mt-1 "
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
          alt="item image"
          style={{ height: "100px" }}
        />
      </div>

      <div className="d-flex flex-column ml-1">
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <h5 style={{ fontWeight: "bold" }}>R {price}</h5>
        <div style={{ fontWeight: "bold" }}>
          {numStock > 0 ? "in Stock" : "Out of Stock"}
        </div>
      </div>
      <div className="d-flex  align-items-end  ">
        <DeleteIcon
          onClick={() => {
            deleteListHandler(id);
          }}
        />
        <AddShoppingCartIcon
          className="ml-1"
          onClick={(e) => {
            addToCartHandler({
              title,
              id,
              image,
              qty: 1,
              price,
              ratings,
              numStock,
            });
          }}
        />
      </div>
    </div>
  );
};

export default MobileItem;
