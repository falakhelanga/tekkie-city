import CheckOutSteps from "../components/CheckOutSteps";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BottomNavigationn from "../components/BottomNavigation";
import useIsAuth from "../helpefunctions/isAuth";

const CheckOut = () => {
  const { redirectHandler } = useIsAuth();
  redirectHandler();
  return (
    <div>
      <Container className="checkout_container d-flex justify-content-center mb-4">
        <Row className="justify-content-center  w-100">
          <Col xs={12} sm={12} md={9} lg={8} xl={8}>
            <div className="cherckout_wrapper">
              <CheckOutSteps />
            </div>
          </Col>
        </Row>
      </Container>
      <BottomNavigationn />
    </div>
  );
};
export default CheckOut;
