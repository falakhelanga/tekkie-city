import React from "react";
import { Image } from "react-bootstrap";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";

const Order = ({ order }) => {
  const history = useHistory();
  return (
    <div className="d-flex flex-column w-100 order mb-3 ">
      <div className="top_div d-flex justify-content-between align-items-center w-100 mb-2 px-2">
        {" "}
        <h5>Paid At {new Date(order.paidAt).toLocaleDateString()}</h5>
        <IconButton
          className="d-block d-lg-none text-white"
          style={{ outline: "none" }}
          onClick={() => {
            history.push(`/orders/${order._id}`);
          }}
        >
          {" "}
          <ArrowForwardIcon />
        </IconButton>
        <button
          onClick={() => {
            history.push(`/orders/${order._id}`);
          }}
          type="button"
          className="order_button p-2 text-muted d-none d-lg-block"
        >
          Order Details
        </button>
      </div>
      <div className="bottom_div p-2">
        <div className="d-flex">
          {order.orderItems.map((item) => (
            <div className="mr-2" key={item._id}>
              <Image
                src={item.image}
                alt={item.name}
                fluid
                className="order_image px-2 py-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
