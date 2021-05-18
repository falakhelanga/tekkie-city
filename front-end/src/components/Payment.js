import React from "react";
import {
  ElementsConsumer,
  Elements,
  CardElement,
} from "@stripe/react-stripe-js";
import usePayment from "../helpefunctions/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Form, Button, Col, Row, Spinner, Alert } from "react-bootstrap";
import OrderSummury from "./OrderSummury";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const Payment = ({ activeStep, steps, handleBack, handleNext }) => {
  const { handleSubmit, error, loading } = usePayment();

  return (
    <div className="bg-white p-4">
      {error && <Alert variant="danger">{error}</Alert>}
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => {
            return (
              <div>
                <OrderSummury />
                <Form
                  onSubmit={(e) => {
                    handleSubmit(e, stripe, elements, handleNext);
                  }}
                >
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Group>
                        <Form.Label>Account Holder</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Account holder name"
                          name="account_holder"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Group>
                        <Form.Label>Card Description</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Card description"
                          name="account_holder"
                        />
                        <Form.Text className="text-muted">
                          eg My FNB Credit Card
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <CardElement
                    className="mt-2"
                    options={{
                      style: {
                        base: {
                          color: "black",
                          border: "1px solid black !important",
                        },
                      },
                    }}
                  />
                  <div className="mt-3">
                    {activeStep !== 0 && (
                      <Button
                        onClick={handleBack}
                        className="mr-2"
                        style={{
                          border: "1px solid black",
                          color: "white",
                          backgroundColor: "black",
                        }}
                      >
                        Back
                      </Button>
                    )}

                    {activeStep === 0 ? (
                      <Button
                        type="submit"
                        style={{ border: "1px solid white", color: "white" }}
                        className="bg-dark"
                      >
                        continue
                      </Button>
                    ) : activeStep === 1 ? (
                      <Button
                        type="submit"
                        style={{ border: "1px solid white", color: "white" }}
                        className="bg-dark"
                      >
                        {loading ? (
                          <>
                            {" "}
                            <Spinner
                              style={{ color: "white" }}
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Loading...</span>
                          </>
                        ) : (
                          "Pay"
                        )}
                      </Button>
                    ) : (
                      <Button
                        style={{ border: "1px solid white", color: "white" }}
                        className="bg-dark"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1
                          ? "Confirm"
                          : "Continiue"}
                      </Button>
                    )}
                  </div>
                </Form>
              </div>
            );
          }}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default Payment;
