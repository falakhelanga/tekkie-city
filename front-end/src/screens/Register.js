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
import { useRegister } from "../helpefunctions/user";
import { Formik } from "formik";
import useRedirect from "../helpefunctions/redirect";
import { Link, useParams } from "react-router-dom";

import {
  registerInitialValues,
  registerValidationSchema,
} from "../utils/formikUtils";

const Register = ({ history }) => {
  useRedirect(history);
  const { redirectPath } = useParams();
  const { registerHandler, loading, error } = useRegister();
  const registerHandleSubmit = async (values) => {
    const { email, password } = values;
    registerHandler(email, password);
  };

  return (
    <>
      <Formik
        initialValues={registerInitialValues}
        onSubmit={registerHandleSubmit}
        validationSchema={registerValidationSchema}
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
                    <Form.Group>
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

                    <Form.Group>
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

                    <Form.Group>
                      <Form.Label style={{ color: "white" }}>
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={values.confirm}
                        name="confirm"
                        onChange={handleChange}
                        isInvalid={touched.confirm && errors.confirm}
                        onBlur={handleBlur}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirm}
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
                        "Register"
                      )}
                    </Button>
                    <div style={{ color: "white" }} className="mt-2">
                      Already have an account?{" "}
                      <Link
                        to={
                          redirectPath ? `/signin/${redirectPath}` : "/signin"
                        }
                        className="ml-1"
                      >
                        Sign in
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

export default Register;
