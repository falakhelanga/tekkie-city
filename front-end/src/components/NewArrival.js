import React from "react";
import NaCard from "./NaCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 768,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 768,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const NewArrival = () => {
  return (
    <div className="na_wrapper  mt-5">
      <h2 className=" text-center text-white mb-3">New Arrivals</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <NaCard />
        <NaCard />
        <NaCard />
        <NaCard />
        <NaCard />
        <NaCard />
        <NaCard />
        <NaCard />
        <NaCard />
      </Carousel>
      ;
    </div>
  );
};

export default NewArrival;
