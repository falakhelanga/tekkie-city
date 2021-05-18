import React from "react";
import { Row, Col } from "react-bootstrap";
import MspecialBigCard from "./MspecialBigCard";
import MspecialSmallcard from "./MspecialSmallcard";

const MonthlySpecials = () => {
  return (
    <div className="mspecial_wrapper mt-5">
      <h2 className="text-center text-white mt-5 mb-3">Montly Specials</h2>
      <Row
        className="no-gutters"
        style={{
          height: "100%",
        }}
      >
        {/* FIRST COL */}
        <Col
          style={{
            height: "100%",
          }}
          className="mr-1"
        >
          <Row>
            <Col>
              <MspecialSmallcard />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <MspecialSmallcard />
            </Col>
          </Row>
        </Col>
        {/* SECOND COL */}

        <Col className="mx-1 d-none d-lg-block">
          <MspecialBigCard />
        </Col>

        {/* THIRD COL  */}
        <Col clasName="ml-1">
          <Row>
            <Col>
              <MspecialSmallcard />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <MspecialSmallcard />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default MonthlySpecials;
