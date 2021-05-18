import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
const AdressConfirm = () => {
  const { adress } = useSelector((state) => state.adress);
  return (
    <div>
      <h4>Delivery Adress</h4>
      <div>
        <Row>
          <Col>Recipient Name:</Col>
          <Col className="text-capitalize">{adress.recipient_name}</Col>
        </Row>
        <Row>
          <Col>Recipient Number:</Col>
          <Col className="">{adress.recipient_number}</Col>
        </Row>

        <Row>
          <Col>Suburb:</Col>
          <Col className="">{adress.suburb}</Col>
        </Row>
        <Row>
          <Col>City:</Col>
          <Col className="">{adress.city}</Col>
        </Row>
        <Row>
          <Col>Postal Code:</Col>
          <Col className="">{adress.postal_code}</Col>
        </Row>
      </div>
    </div>
  );
};

export default AdressConfirm;
