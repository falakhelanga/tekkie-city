import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Image } from "react-bootstrap";

const styles = {
  slide: {
    minHeight: 100,
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

function SwipeImages({ image, thumbNails }) {
  return (
    <SwipeableViews enableMouseEvents>
      <div style={Object.assign({}, styles.slide)}>
        <Image
          src={image}
          alt={image}
          fluid
          style={{
            maxHeight: "80%",
            height: "80%",
            width: "100%",
          }}
        />
      </div>
      {thumbNails.map((thumbNail) => (
        <div style={Object.assign({}, styles.slide)} key={thumbNail}>
          <Image
            src={thumbNail}
            alt={thumbNail}
            fluid
            style={{
              maxHeight: "80%",
              height: "80%",
              width: "100%",
            }}
          />
        </div>
      ))}
    </SwipeableViews>
  );
}

export default SwipeImages;
