import { Image } from "react-bootstrap";
import React from "react";
const ThumbNail = ({ image, imageChanger }) => (
  <div
    className="border rounded py-2 d-flex justify-content-center align-items-center mt-1"
    style={{
      overflow: "hidden",
      width: "80px",
      height: "83px",
    }}
  >
    <Image
      src={image}
      alt="thumbnail image"
      fluid
      onClick={() => {
        imageChanger(image);
      }}
    />
  </div>
);

export default ThumbNail;
