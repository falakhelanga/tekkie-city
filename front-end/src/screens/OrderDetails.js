import React from "react";
import { Row, Col, Card, Container, Alert } from "react-bootstrap";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ListIcon from "@material-ui/icons/List";
import useIsAuth from "../helpefunctions/isAuth";
import Spinner from "../components/Spinner";
import { useGetOrder } from "../helpefunctions/orders";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { redirectHandler } = useIsAuth();
  const { id } = useParams();
  const { order, loading, error } = useGetOrder(id);
  redirectHandler();
  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : order ? (
        <Card style={{ borderRadius: "2px" }} className="pb-2">
          <div className="d-flex flex-column">
            <h6 className="d-block d-md-none ml-3">
              Order #<span className="text-uppercase">{id}</span>
            </h6>
            <div className="order_detail_top_div d-flex justify-content-between py-1 px-3 mb-2">
              <div className="left_div d-flex align-items-center">
                <h6 className="d-none d-md-block">
                  Order #<span className="text-uppercase">{id}</span>
                </h6>{" "}
                <span className="devider d-none d-md-block"></span>
                <h6>
                  Ordered{" "}
                  <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                </h6>{" "}
                <span className="devider"></span>
                <h6>Paid At {new Date(order.paidAt).toLocaleDateString()}</h6>
              </div>
              <button type="button" className="p-2 d-none d-md-block">
                Remove order
              </button>
            </div>
            <div className="order_detail_bottom_div d-flex flex-column">
              <Row className="mx-3">
                <Col xs={12} sm={12} md={12} lg={4} className=" w-100">
                  <div className="shipping_adress  w-100 d-flex flex-column">
                    <h6>
                      <LocalShippingIcon /> Shipping Adress
                    </h6>
                    <div className="content">
                      <div>{order.shippingAdress.recipientName}</div>
                      <div>{order.shippingAdress?.streetNumber}</div>
                      <div>{order.shippingAdress.province}</div>
                      <div>{order.shippingAdress.city}</div>
                      <div>{order.shippingAdress.postalCode}</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} className=" w-100">
                  <div className="shipping_adress  w-100 d-flex flex-column">
                    <h6>
                      <CreditCardIcon /> Payment Method
                    </h6>
                    <div className="content">
                      <div>{order.payment.method}</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} className=" w-100">
                  <div className="shipping_adress  w-100 d-flex flex-column">
                    <h6>
                      <ListIcon /> Order Summury
                    </h6>
                    <div className="content">
                      <div className="d-flex justify-content-between">
                        <span>
                          {order.orderItems.reduce(
                            (acc, item) => acc + +item.qty,
                            0
                          )}{" "}
                          Items
                        </span>
                        <span>R {order.payment.totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Delivery</span>
                        <span>R 0</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <button
              type="button"
              className="p-2 d-block d-md-none mx-2 order_remove_button mt-2"
            >
              Remove order
            </button>
          </div>
        </Card>
      ) : null}
    </Container>
  );
};

export default OrderDetails;
