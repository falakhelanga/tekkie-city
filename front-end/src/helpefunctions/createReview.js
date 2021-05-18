import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const useCreateReview = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [feedBack, setFeedBack] = useState(null);
  const { token } = useSelector((state) => state.login);

  const submitHandler = async (id, name, comment, rate) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    };
    setLoading(true);
    setError(null);
    try {
      const {
        data: { message },
      } = await axios.post(
        `/api/products/review/${id}`,
        { name, comment, rate },
        config
      );
      setFeedBack(message);
      setLoading(false);
      setError(null);
    } catch (error) {
      setFeedBack(null);
      setLoading(false);
      setError(error.response?.data.message);
    }
  };

  return {
    loading,
    error,
    submitHandler,
    feedBack,
  };
};
