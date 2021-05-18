import { Redirect } from "react-router-dom";
import { logOut } from "../store/actions/user";
import { useDispatch } from "react-redux";
const LogOut = () => {
  const dispatch = useDispatch();
  dispatch(logOut());
  return <Redirect to="/" />;
};

export default LogOut;
