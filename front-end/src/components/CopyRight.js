import React from "react";
import { Row, Col } from "react-bootstrap";

const CopyRight = () => {
  return (
    <div className="copy_wrapper">
      <Row className="no-gutters">
        <Col className="mr-1">
          <div className="text-white">&copy; Tekkie Shop </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-white">Created By Falakhe</Col>
      </Row>
    </div>
  );
};

export default CopyRight;
