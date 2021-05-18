import React from "react";
import Rating from "@material-ui/lab/Rating";

const Rate = ({ numRate }) => {
  return (
    <div>
      <Rating name="read-only" value={numRate} readOnly />
    </div>
  );
};

export default Rate;
