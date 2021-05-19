import { Redirect } from "react-router-dom";
import { logOut } from "../store/actions/user";
import { useDispatch } from "react-redux";
import React from "react";
const LogOut = () => {
  const dispatch = useDispatch();
  dispatch(logOut());
  return <Redirect to="/" />;
};

export default LogOut;
