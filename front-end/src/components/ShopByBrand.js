import React from "react";
import BrandCard from "./BrandCard";
import { Row, Col } from "react-bootstrap";

const ShopByBrand = () => {
  return (
    <div className="sbrand_wrapper pb-5">
      <h2 className="mb-3 text-white text-center">Shop By Brand</h2>
      <Row className="bcards_container no-gutters">
        <Col className="mr-2">
          <BrandCard bgImage="nike" />
        </Col>
        <Col>
          <BrandCard bgImage="adidas" />
        </Col>
      </Row>
      <Row className="bcards_container mt-2 no-gutters">
        <Col className="mr-2">
          <BrandCard bgImage="puma" />
        </Col>
        <Col>
          <BrandCard bgImage="lacoste" />
        </Col>
      </Row>
    </div>
  );
};

export default ShopByBrand;
