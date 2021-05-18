import React from "react";
import Btn from "./Btn";

const MspecialSmallcard = () => {
  return (
    <div
      className="ms_smallcard_wrapper"
      style={{
        backgroundImage: "url('/images/nike.jpg')",
      }}
    >
      <div className="ms_smallcard_content mt-5">
        <p>Nike Sneakers</p>
        <h1>30% OFF</h1>
        <div className="mt-3">
          <Btn btnClick={() => {}}>View More</Btn>
        </div>
      </div>
    </div>
  );
};

export default MspecialSmallcard;
