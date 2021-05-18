import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { useAddtoCart } from "../helpefunctions/cart";
import { useDeleteToList } from "../helpefunctions/user";
import Rate from "../components/Rate";

const WishListItem = ({ title, image, price, id, numStock, ratings }) => {
  const { addToCartHandler } = useAddtoCart();
  const { deleteListHandler } = useDeleteToList();

  return (
    <Row className="w-100  justify-content-center">
      <Col md={8}>
        <div
          className=" py-3 px-3  d-flex justify-content-between mt-2  "
          style={{
            color: "white",
            backgroundColor: "transparent",
            border: "1px solid rgba(0,0,0,0.6)",
            boxShadow: "0px 0px 8px  rgba(0,0,0,0.6)",
          }}
        >
          {/* CART IMAGE COLUMN */}
          <div>
            <Image
              rounded
              src={image}
              alt={title}
              fluid
              style={{ height: "70px" }}
            />
            {/* PRODUCT NAME COLUMN */}
          </div>
          <div>
            <h3 className="text-capitalize">{title}</h3>
            <Rate numRate={ratings} />
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {numStock > 0 ? "in Stock" : "Out of Stock"}
            </span>
          </div>
          {/* PRODUCT PRICE COLUMN */}
          <div className="d-flex flex-column">
            <h3>R {price.toFixed(2)}</h3>
          </div>
          <div>
            <IconButton
              style={{ outline: "none" }}
              onClick={() => {
                deleteListHandler(id);
              }}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              style={{ outline: "none" }}
              onClick={() => {
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
            >
              <AddShoppingCartIcon style={{ color: "black" }} />
            </IconButton>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default WishListItem;
