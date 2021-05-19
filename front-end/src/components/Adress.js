import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

import { Formik } from "formik";
import {
  adressInitialValues,
  adressValidationSchema,
} from "../utils/formikUtils";
import { adressActions } from "../store/createSlices/checkout";
import useAdressSubmit from "../helpefunctions/adressSubmit";

const Adress = ({ activeStep, steps, handleBack, handleNext }) => {
  const { adressHandleSubmit } = useAdressSubmit(handleNext, adressActions);

  return (
    <Formik
      initialValues={adressInitialValues}
      onSubmit={adressHandleSubmit}
      validationSchema={adressValidationSchema}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isSubmitting,
      }) => {
        return (
          <Card className="p-4">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Form.Label>Recipient name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Recipient name"
                      value={values.recipient_name}
                      name="recipient_name"
                      onChange={handleChange}
                      isInvalid={
                        touched.recipient_name && errors.recipient_name
                      }
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.recipient_name}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Form.Label>Recipient number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Recipient mobile"
                      value={values.recipient_number}
                      name="recipient_number"
                      onChange={handleChange}
                      isInvalid={
                        touched.recipient_number && errors.recipient_number
                      }
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.recipient_number}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Form.Label>Street Adress</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter street adress"
                      value={values.street_adress}
                      name="street_adress"
                      onChange={handleChange}
                      isInvalid={touched.street_adress && errors.street_adress}
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.street_adress}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Form.Label>Complex number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter street complex number"
                      value={values.complex}
                      name="complex"
                      onChange={handleChange}
                      isInvalid={touched.complex && errors.complex}
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.street_adress}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Form.Label>Suburb</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter suburb"
                      value={values.suburb}
                      name="suburb"
                      onChange={handleChange}
                      isInvalid={touched.suburb && errors.suburb}
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.street_adress}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter city"
                      value={values.city}
                      name="city"
                      onChange={handleChange}
                      isInvalid={touched.city && errors.city}
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Form.Label>Province</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter province"
                      value={values.province}
                      name="province"
                      onChange={handleChange}
                      isInvalid={touched.province && errors.province}
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.province}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter postal code"
                      value={values.postal_code}
                      name="postal_code"
                      onChange={handleChange}
                      isInvalid={touched.postal_code && errors.postal_code}
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.postal_code}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <div>
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    className="mr-2"
                    style={{
                      border: "1px solid white",
                      color: "white",
                      backgroundColor: "#0000",
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
                    onClick={() => {
                      handleNext();
                    }}
                    style={{ border: "1px solid white", color: "white" }}
                    className="bg-dark"
                  >
                    Pay
                  </Button>
                ) : (
                  <Button
                    style={{ border: "1px solid white", color: "white" }}
                    className="bg-dark"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Confirm" : "Continiue"}
                  </Button>
                )}
              </div>
            </Form>
          </Card>
        );
      }}
    </Formik>
  );
};

export default Adress;
