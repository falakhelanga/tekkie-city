import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useGetOrders = () => {
  const { token } = useSelector((state) => state.login);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        };
        const {
          data: { orders },
        } = await axios.get("/api/orders/", config);

        setLoading(false);
        setError(false);
        setOrders(orders);
      } catch (error) {
        setLoading(false);
        setOrders(null);
        setError(error.response?.data.message);
      }
    };

    fetchOrders();
  }, [token]);

  return {
    orders,
    loading,
    error,
  };
};

export const useGetOrder = (id) => {
  const { token } = useSelector((state) => state.login);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        };
        const {
          data: { order },
        } = await axios.get(`/api/orders/${id}`, config);

        setLoading(false);
        setError(false);
        setOrder(order);
      } catch (error) {
        setLoading(false);
        setOrder(null);
        setError(error.response?.data.message);
      }
    };

    fetchOrders();
  }, [token, id]);

  return {
    loading,
    error,
    order,
  };
};
