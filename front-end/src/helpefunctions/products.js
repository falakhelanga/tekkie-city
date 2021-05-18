import { useState, useEffect } from "react";
import axios from "axios";
import query from "query-string";
import { useLocation } from "react-router-dom";

export const useFetchProducts = (page = 1) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const location = useLocation();
  const { search } = query.parse(location.search);
  const searchQuery = search && `&search=${search}`;
  useEffect(() => {
    const fetching = async () => {
      setLoading(true);
      try {
        const {
          data: { products, total },
        } = await axios.get(`/api/products/?page=${page}${searchQuery}`);
        setProducts(products);
        setTotal(total);
        setError(null);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response?.data.message);
      }
    };

    fetching();
  }, [page, searchQuery]);

  return {
    products,
    loading,
    error,
    total,
  };
};

export const useFetchProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response?.data.message);
      }
    };

    fetching();
  }, [id]);

  return {
    product,
    loading,
    error,
  };
};
