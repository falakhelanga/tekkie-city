import { loginAction } from "../createSlices/login";
import { registerAction } from "../createSlices/register";
import axios from "axios";

export const userRegister = (email, password) => async (dispatch) => {
  dispatch(registerAction.registerInit());
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/register",
      { email, password },
      config
    );
    dispatch(registerAction.registerSucc());
    dispatch(
      loginAction.loginSucc({
        email: data?.email,
        token: data?.token,
      })
    );

    const localStorageUser = JSON.stringify({
      email: data?.email,
      token: data?.token,
      loading: false,
      error: null,
    });
    localStorage.setItem("user", localStorageUser);
  } catch (error) {
    dispatch(
      registerAction.registerFail({
        error: error.response.data.message,
      })
    );
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  dispatch(loginAction.loginInit());
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/signin",
      { email, password },
      config
    );

    dispatch(
      loginAction.loginSucc({
        email: data?.email,
        token: data?.token,
      })
    );

    const localStorageUser = JSON.stringify({
      email: data?.email,
      token: data?.token,
      loading: false,
      error: null,
    });
    localStorage.setItem("user", localStorageUser);
  } catch (error) {
    dispatch(
      loginAction.loginFail({
        error: error.response?.data.message,
      })
    );
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(loginAction.logOut());
  const user = JSON.stringify({
    email: "",
    token: null,
    loading: false,
    error: null,
  });
  localStorage.setItem("user", user);
};
