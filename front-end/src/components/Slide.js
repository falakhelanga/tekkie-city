import React from "react";
import Btn from "./Btn";
import { withRouter } from "react-router-dom";

const Slide = ({ product, history }) => {
  return (
    <div className="slide_wrapper ">
      <div
        className="slide_container px-1 "
        style={{
          backgroundImage: `url(${product.image})`,

          backgroundColor: "#F5F5F5",
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
      >
        <p>
          {product.title} <br></br> {product.discount}% OFF
        </p>
        <div className="slide_content text-dark">
          <p>
            {product.title} <br></br> {product.discount}% OFF
          </p>
          <Btn
            btnClick={() => {
              history.push(`/products/${product.id}`);
            }}
          >
            SHOP NOW
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Slide);
