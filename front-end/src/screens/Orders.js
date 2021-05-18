import React from "react";
import { Container, Alert } from "react-bootstrap";
import Spinner from "../components/Spinner";
import Order from "./Order";
import useIsAuth from "../helpefunctions/isAuth";
import { useGetOrders } from "../helpefunctions/orders";
const Orders = () => {
  const { redirectHandler } = useIsAuth();
  const { orders, loading, error } = useGetOrders();
  redirectHandler();
  return (
    <Container className="">
      {loading ? (
        <Spinner />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : orders ? (
        orders.length > 0 ? (
          orders.map((order) => <Order key={order._id} order={order} />)
        ) : (
          <h3 className="text-white">You have no orders yet!</h3>
        )
      ) : null}
    </Container>
  );
};

export default Orders;
