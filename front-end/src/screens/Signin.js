import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import BottomNavigationn from "../components/BottomNavigation";
import React from "react";
import { withRouter, useParams } from "react-router-dom";
import { useLogin } from "../helpefunctions/user";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import useRedirect from "../helpefunctions/redirect";
import {
  signInInitialValues,
  signInValidationSchema,
} from "../utils/formikUtils";

const Signin = ({ history }) => {
  useRedirect();
  const { loginHandler, loading, error } = useLogin();
  const { redirectPath } = useParams();

  const signInHandleSubmit = async (values) => {
    const { email, password } = values;

    loginHandler(email, password);
  };

  return (
    <>
      <Formik
        initialValues={signInInitialValues}
        onSubmit={signInHandleSubmit}
        validationSchema={signInValidationSchema}
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
            <Container
              className="w-100 d-flex justify-content-center align-items-center "
              style={{
                height: "100%",
                paddingBottom: "3rem",
                marginTop: "3rem",
              }}
            >
              {" "}
              <Row className="d-flex justify-content-center align-items-center mt-3 w-100 ">
                <Col
                  xs={12}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={4}
                  className="py-5"
                  style={{
                    border: "1px solid rgba(0,0,0,0.6)",
                    boxShadow: "0px 0px 8px  rgba(0,0,0,0.6)",
                  }}
                >
                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label style={{ color: "white" }}>
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        isInvalid={touched.email && errors.email}
                        onBlur={handleBlur}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label style={{ color: "white" }}>
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        name="password"
                        onChange={handleChange}
                        isInvalid={touched.password && errors.password}
                        onBlur={handleBlur}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      variant="dark"
                      type="submit"
                      className="btn-block"
                      disabled={!isValid || loading}
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
                        "Sign in"
                      )}
                    </Button>
                    <div style={{ color: "white" }} className="mt-2">
                      Dont have an account?{" "}
                      <Link
                        to={
                          redirectPath
                            ? `/register/${redirectPath}`
                            : "/register"
                        }
                        className="ml-1"
                      >
                        Register
                      </Link>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          );
        }}
      </Formik>

      <BottomNavigationn />
    </>
  );
};

export default withRouter(Signin);
