import React from "react";

const BrandCard = ({ bgImage }) => {
  return (
    <div
      className="brandcard_wrapper "
      style={{
        backgroundImage: `url('/images/${bgImage}_logo2.png')`,
        backgroundPosition: "center center",
        backgroundSize: "100%",
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default BrandCard;
