import React from "react";
import { Container, Alert } from "react-bootstrap";

import WishListItem from "../components/WishListItem";
import BottomNavigation from "../components/BottomNavigation";
import useIsAuth from "../helpefunctions/isAuth";
import MobileItem from "../components/WishListMobileItem";
import Spinner from "../components/Spinner";
import { useGetList } from "../helpefunctions/user";

const WishList = ({ history }) => {
  const { redirectHandler } = useIsAuth(history);
  redirectHandler();
  const { List, error, loading } = useGetList();
  return (
    <Container
      fluid
      className="d-flex justify-content-center "
      style={{
        height: "100%",
        paddingBottom: "3rem",
        marginTop: "3rem",
      }}
    >
      {loading ? (
        <Spinner />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : List ? (
        List.length > 0 ? (
          <>
            {" "}
            <div className="d-none d-md-block w-100">
              {List.map((product) => (
                <WishListItem
                  key={product._id}
                  image={product.image}
                  price={product.price}
                  id={product._id}
                  title={product.productName}
                  numStock={product.numStock}
                  ratings={product.ratings}
                />
              ))}
            </div>
            <div className="d-block d-md-none">
              {List.map((product) => (
                <MobileItem
                  key={product._id}
                  image={product.image}
                  price={product.price}
                  id={product._id}
                  title={product.productName}
                  numStock={product.numStock}
                  ratings={product.ratings}
                />
              ))}
            </div>
          </>
        ) : (
          List &&
          List.length === 0 && (
            <h3 className="text-white">You have no Items in your list!</h3>
          )
        )
      ) : null}
      <BottomNavigation />
    </Container>
  );
};

export default WishList;
