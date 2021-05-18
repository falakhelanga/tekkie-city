import { CardElement } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { emptyCart } from "../store/actions/cart";
import axios from "axios";
const usePayment = () => {
  const dispatch = useDispatch();
  const { adress } = useSelector((state) => state.adress);
  const { products, totalPrice } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.login);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const orderItems = products.map((product) => ({
    name: product.title,
    qty: product.qty,
    price: product.price,
    product: product.id,
    image: product.image,
  }));
  const orderAdress = {
    streetNumber: "1750",
    city: adress.city,
    postalCode: adress.postal_code,
    province: adress.province,
    suburb: adress.suburb,
    recipientName: adress.recipient_name,
    recipientNumber: adress.recipient_number,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };
  const handleSubmit = async (event, stripe, elements, handleNext) => {
    setLoading(true);
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });
      const order = {
        items: orderItems,
        adress: orderAdress,
        payment: {
          method: "card",
          gateway: "stripe",
          id: paymentMethod.id,
          type: paymentMethod.type,
          total: totalPrice,
        },
      };
      if (error) {
        throw error;
      } else {
        await axios.post("/api/orders/", order, config);
        setLoading(false);
        setError(false);
        dispatch(emptyCart());
        handleNext();
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return {
    handleSubmit,
    error,
    loading,
  };
};

export default usePayment;
