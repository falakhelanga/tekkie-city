import React from "react";
import { Row, Col, ListGroup, Image, Button, Spinner } from "react-bootstrap";
import { useAddtoCart } from "../helpefunctions/cart";
import ProductThumbnails from "../components/ProductThumbnails";
import { useSelector } from "react-redux";
import Rate from "../components/Rate";
import Colors from "../components/Colors";
import Truncate from "react-truncate";
import { useAddtoList } from "../helpefunctions/user";
import { withRouter, useLocation } from "react-router-dom";
import useSnackBar from "../helpefunctions/snackbar";
import MysnackBar from "./SnackBar";
import useIsAuth from "../helpefunctions/isAuth";
import SwipeImages from "./SwipeImages";

const DetailTabPanel = ({
  image,
  title,
  imageDetails,
  colors,
  price,
  description,
  numReviews,
  numStock,
  ratings,
  brand,
  imageChanger,
  id,
  history,
  discountPrice,
}) => {
  const { addToCartHandler } = useAddtoCart();
  const { addToListHandler, loading, error, update } = useAddtoList();
  const { products } = useSelector((state) => state.cart);
  const { setOpen, open } = useSnackBar(error || update);
  const { redirectHandler } = useIsAuth();
  const location = useLocation();

  return (
    <div className="mt-5">
      <MysnackBar
        setOpen={setOpen}
        open={open}
        severity={error !== null ? "error" : "success"}
      >
        {update}
        {error}
      </MysnackBar>
      <div className="single_product_container">
        <Row>
          {/* PRODUCT DETAILS COLUMN */}
          <Col md={8} className="single_product_det_col borderd rounded py-3">
            <Row className="no-gutters">
              {/* IMAGE DETAILS COLUMN */}
              <Col md={6} className="">
                <Row className="no-gutters">
                  <Col
                    className="d-md-flex justify-content-end mr-2 d-none "
                    md={3}
                  >
                    <ProductThumbnails
                      thumbNails={imageDetails}
                      imageChanger={imageChanger}
                    />
                  </Col>
                  <Col md={8}>
                    <div className="single_product_image ">
                      <div className="d-block d-md-none">
                        <SwipeImages image={image} thumbNails={imageDetails} />
                      </div>

                      <Image
                        className="d-none d-md-block"
                        src={image}
                        alt={title}
                        fluid
                        style={{
                          maxHeight: "100%",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* DESCRIPTION COLUMN */}
              <Col md={6} className="mt-2">
                <ListGroup variant="flush">
                  <ListGroup.Item
                    as="h3"
                    className=" "
                    style={{
                      backgroundColor: "rgb(13,18,23)",
                      color: "white",
                    }}
                  >
                    {title}
                  </ListGroup.Item>
                  <ListGroup.Item as="p" className=" list-group-item-dark">
                    <div
                      style={{
                        fontWeight: "bold",
                        marginBottom: "1rem",
                      }}
                    >
                      Product Summary
                    </div>

                    <Truncate lines={2} ellipsis="...">
                      {description}
                    </Truncate>
                  </ListGroup.Item>
                  <ListGroup.Item as="div" className=" list-group-item-dark">
                    <div className="d-flex">
                      <Rate numRate={ratings} />{" "}
                      <span className="ml-1">{numReviews} Reviews</span>
                    </div>
                    <h3 className="d-block d-md-none">R {price.toFixed(2)}</h3>
                    <div
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {numStock > 0 ? "In Stock" : "Out of Stock"}
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item
                    as="div"
                    className=" list-group-item-dark d-flex flex-column"
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Select Color
                    </div>
                    <div className="d-flex">
                      {colors.map((color) => (
                        <div className="mr-1" key={color}>
                          <Colors color={color} />
                        </div>
                      ))}
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>

          {/* TOTAL DETAIL COLUMNS */}

          <Col
            md={3}
            className="single_product_total_col ml-3 d-none d-md-block"
          >
            <div className="d-flex flex-column sp_total p-3">
              <div>
                <h1>R {price.toFixed(2)}</h1>
                <h4
                  className="text-decoration-line-through text-muted "
                  style={{ fontSize: "1.2rem" }}
                >
                  <del>
                    {" "}
                    {discountPrice > 0 && "R" + discountPrice.toFixed(2)}
                  </del>
                </h4>
              </div>

              <Button
                onClick={() => {
                  addToCartHandler({
                    title,
                    image,
                    price,
                    ratings,
                    qty: 1,
                    numStock,
                    id,
                  });
                }}
                variant="dark"
                className="mt-2"
                style={{
                  fontWeight: "bold",
                }}
              >
                Add To Cart
              </Button>
              {products.length > 0 && (
                <Button
                  onClick={() => {
                    history.push("/cart");
                  }}
                  className="mt-2"
                  style={{
                    backgroundColor: "rgb(13,18,23) !important",
                    fontWeight: "bold",
                  }}
                >
                  Go To Cart
                </Button>
              )}

              <Button
                disabled={loading}
                onClick={() => {
                  redirectHandler(location.pathname);
                  addToListHandler(id);
                }}
                variant="light"
                className="mt-2"
                style={{
                  fontWeight: "bold",
                }}
              >
                {loading ? (
                  <>
                    {" "}
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                  </>
                ) : (
                  "Add To List"
                )}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withRouter(DetailTabPanel);
