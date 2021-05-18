import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import listActions from "../store/actions/list";
import { userRegister, userLogin } from "../store/actions/user";
import axios from "axios";

export const useRegister = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.register);
  const registerHandler = async (email, password, submitProps) => {
    dispatch(userRegister(email, password, submitProps));
  };

  return {
    registerHandler,
    loading,
    error,
  };
};

export const useLogin = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login);
  const loginHandler = async (email, password, submitProps) => {
    dispatch(userLogin(email, password, submitProps));
  };

  return {
    loginHandler,
    loading,
    error,
  };
};

export const useAddtoList = () => {
  const [update, setUpdate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.login);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };
  const addToListHandler = async (id) => {
    try {
      setError(null);
      setUpdate(null);
      setLoading(true);
      const {
        data: { message },
      } = await axios.post(`/api/users/list/${id}`, null, config);
      setUpdate(message);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(error.response?.data.message);

      setUpdate(null);
      setLoading(false);
    }
  };

  return { addToListHandler, loading, error, update };
};

export const useGetList = () => {
  const { list: List, error, loading } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listActions());
  }, [dispatch]);

  return { List, loading, error };
};

export const useDeleteToList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };
  const deleteListHandler = async (id) => {
    try {
      setLoading(true);
      const {
        data: { message },
      } = await axios.delete(`/api/users/list/${id}`, config);
      dispatch(listActions());

      setLoading(false);
    } catch (error) {
      setError(error.response?.data.message);

      setLoading(false);
    }
  };

  return { deleteListHandler, loading, error };
};
