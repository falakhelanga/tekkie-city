import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "../components/Spinner";
import MyCarousel from "../components/MyCarousel";
import BottomNavigation from "../components/BottomNavigation";
import NaCard from "../components/NaCard";
import queryString from "query-string";
import MyPagination from "../components/Pagination";
import { useFetchProducts } from "../helpefunctions/products";

const Products = ({ location }) => {
  const { page, search } = queryString.parse(location.search);
  const { products, loading, total } = useFetchProducts(page);

  const discountProducts =
    products !== null && products.filter((product) => product.discount > 0);

  return loading ? (
    <Spinner />
  ) : products !== null ? (
    <Container
      fluid
      style={{
        height: "100%",
        paddingBottom: "5rem",
      }}
    >
      {!search && <MyCarousel products={discountProducts} />}

      <div className="products_wrapper  w-100 d-flex flex-column align-items-center mt-4 ">
        {products !== null &&
          (products.length > 0 ? (
            <Row className="no-gutters w-100 container ">
              {products?.map((product) => (
                <Col className="prod_col" xs={6} md={4} lg={3} key={product.id}>
                  <NaCard
                    withRating
                    title={product.title}
                    price={product.price}
                    rating={product.ratings}
                    discount={product.discount}
                    image={product.image}
                    id={product.id}
                    numStock={[product.numStock]}
                    discountPrice={product.discountPrice}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <h3 className="text-white">No result found!</h3>
          ))}
        <MyPagination count={total} />
      </div>

      <BottomNavigation />
    </Container>
  ) : null;
};

export default Products;
