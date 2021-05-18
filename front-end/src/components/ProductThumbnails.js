import React from "react";

import ThumbNail from "./ThumbNail";

const ProductThumbnails = ({ thumbNails, imageChanger }) => {
  return (
    <div className="d-flex flex-column">
      {thumbNails.map((image) => (
        <ThumbNail image={image} key={image} imageChanger={imageChanger} />
      ))}
    </div>
  );
};

export default ProductThumbnails;
