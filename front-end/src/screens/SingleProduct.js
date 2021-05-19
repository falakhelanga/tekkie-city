import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import DetailTabPanel from "../components/DetailTabPanel";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import BottomCart from "../components/BottomCart";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ProductInformation from "../components/ProductInformation";
import Spinner from "../components/Spinner";
import Reviews from "../components/Reviews";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../helpefunctions/products";
import { useAddtoList } from "../helpefunctions/user";
import useSnackBar from "../helpefunctions/snackbar";
import MysnackBar from "../components/SnackBar";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const SingleProduct = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [image, setImage] = useState("");
  const { id } = useParams();
  const { product, loading, error } = useFetchProduct(id);

  const {
    addToListHandler,
    loading: loader,
    error: err,
    update,
  } = useAddtoList();
  const { setOpen, open } = useSnackBar(err || update);
  useEffect(() => {
    if (product) setImage(product.image);
  }, [product]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return loading ? (
    <Spinner />
  ) : product ? (
    <>
      <MysnackBar
        setOpen={setOpen}
        open={open}
        severity={err !== null ? "error" : "success"}
      >
        {update}
        {err}
      </MysnackBar>
      <Container
        className="single_wrapper"
        fluid
        style={{
          height: "100%",
          paddingBottom: "6rem",
        }}
      >
        <IconButton
          style={{ outline: "none" }}
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowBackIcon style={{ color: " white" }} />
        </IconButton>
        {error && <Alert variant="danger">{error}</Alert>}
        <Paper
          className={classes.root}
          style={{
            backgroundColor: "rgb(13,18,40)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab
              label="Details"
              style={{ border: "none", outline: "none", color: "white" }}
            />
            <Tab
              label="nformation"
              style={{ border: "none", outline: "none", color: "white" }}
            />
            <Tab
              label="Reviews"
              style={{ border: "none", outline: "none", color: "white" }}
            />
          </Tabs>
        </Paper>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <DetailTabPanel
            image={image}
            title={product.title}
            imageDetails={product.imageDetails}
            colors={product.colors}
            price={product.price}
            description={product.description}
            numReviews={product.numReviews}
            numStock={product.numStock}
            ratings={product.ratings}
            brand={product.brand}
            id={id}
            imageChanger={setImage}
            discountPrice={product.discountPrice}
          />

          <ProductInformation
            description={product.description}
            title={product.title}
            details={product.details}
          />
          <Reviews
            ratings={product.ratings}
            reviews={product.reviews}
            numReviews={product.numReviews}
            id={id}
          />
        </SwipeableViews>
      </Container>
      <BottomCart
        handleList={addToListHandler}
        id={id}
        loading={loader}
        product={{
          title: product.title,
          image: product.image,
          price: product.price,
          ratings: product.ratings,

          numStock: product.numStock,
          id: id,
        }}
      />
    </>
  ) : null;
};

export default SingleProduct;
