import React from "react";

const Colors = ({ color }) => {
  return (
    <div
      className="rourdend border"
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: color,
        cursor: "pointer",
      }}
    ></div>
  );
};

export default Colors;
