import { Carousel } from "react-bootstrap";
import Slide from "./Slide";

const MyCarousel = ({ products }) => {
  return (
    <Carousel pause="hover">
      {products.map((product) => (
        <Carousel.Item key={product.id}>
          <Slide product={product} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
