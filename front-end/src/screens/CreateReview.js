import {
  Button,
  Form,
  Col,
  Row,
  Container,
  Card,
  Spinner,
  Alert,
} from "react-bootstrap";
import Rate from "../components/Rate";
import queryString from "query-string";
import React, { useState } from "react";
import { Formik } from "formik";
import ControlledRate from "../components/ControledRate";
import { useHistory, useParams } from "react-router-dom";
import useIsAuth from "../helpefunctions/isAuth";
import { reviewInitValues, reviewValidationSchema } from "../utils/formikUtils";
import { useCreateReview } from "../helpefunctions/createReview";

const CreateReview = ({ location }) => {
  const { rate } = queryString.parse(location.search);
  const { id } = useParams();
  const history = useHistory();
  const [rateValue, setRateValue] = useState(0);
  const { redirectHandler } = useIsAuth();
  redirectHandler();
  const {
    submitHandler: handleSubmitt,
    loading,
    error,
    feedBack,
  } = useCreateReview();
  const submitHandler = (values) => {
    handleSubmitt(id, values.name, values.comment, rateValue);
  };

  return (
    <Container
      fluid
      style={{
        height: "100%",
        paddingBottom: "5rem",
      }}
    >
      {feedBack && <Alert variant="success">{feedBack}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row className="">
        {/* average rating column */}
        <Col xs={12} sm={12} md={3} lg={3} xl={3} className="mb-2">
          <Card
            style={{ backgroundColor: "#F1F7FB" }}
            className="d-flex justify-content-center align-items-center py-2"
          >
            <h3>Average Rating</h3>
            <h1>{rate}</h1>
            <p className="text-muted">out of 5 stars</p>
            <Rate numRate={4} />
          </Card>
        </Col>
        {/* input rating column */}
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <h4 style={{ color: "#D8D8D8" }}>Write a review</h4>
          <div>
            <ControlledRate rateValue={rateValue} setRateValue={setRateValue} />
          </div>
          <Formik
            initialValues={reviewInitValues}
            validationSchema={reviewValidationSchema}
            onSubmit={submitHandler}
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
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    style={{ outline: "none" }}
                    className="review_form_group"
                  >
                    <Form.Control
                      className="reviewInput"
                      type="text"
                      placeholder="Enter your name"
                      value={values.name}
                      name="name"
                      onChange={handleChange}
                      isInvalid={touched.name && errors.name}
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    style={{ outline: "none" }}
                    className="review_form_group"
                  >
                    <Form.Control
                      className="reviewInput"
                      as="textarea"
                      rows={4}
                      placeholder="write your review"
                      value={values.comment}
                      name="comment"
                      onChange={handleChange}
                      isInvalid={touched.comment && errors.comment}
                      onBlur={handleBlur}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.comment}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="d-flex">
                    <Button
                      type="submit"
                      variant="dark"
                      style={{ borderRadius: "25px", fontWeight: "bold" }}
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
                        "Submit"
                      )}
                    </Button>
                    <Button
                      onClick={() => {
                        history.goBack();
                      }}
                      variant="light"
                      className="ml-2"
                      style={{ borderRadius: "25px", fontWeight: "bold" }}
                    >
                      {feedBack ? "Go Back" : "Cancel"}
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};
export default CreateReview;
