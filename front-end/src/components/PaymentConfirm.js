import { Col, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
const PaymentConfirm = () => {
  const { adress } = useSelector((state) => state.adress);
  return (
    <div className="mt-3">
      <h4>Payment Details</h4>
      <div>
        <Row>
          <Col>Account Holder:</Col>
          <Col className="text-capitalize">{adress.recipient_name}</Col>
        </Row>
      </div>
    </div>
  );
};

export default PaymentConfirm;
