import React from "react";
import Btn from "./Btn";

const MspecialBigCard = () => {
  return (
    <div
      className="ms_bigcard_wrapper"
      style={{
        backgroundImage: "url('/images/nike.jpg')",
      }}
    >
      <div className="ms_bigcard_content">
        <p>Nike Sneakers</p>
        <h1 className="mb-3">30% OFF</h1>
        <Btn btnClick={() => {}}>View More</Btn>
      </div>
    </div>
  );
};

export default MspecialBigCard;
