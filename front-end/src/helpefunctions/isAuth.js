import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useIsAuth = () => {
  const { token } = useSelector((state) => state.login);
  const isAuth = token !== null;
  const history = useHistory();
  const redirectHandler = (path) => {
    if (!isAuth)
      return history.push(path ? `/signin/?redirect=${path}` : "/signin");
  };

  return {
    isAuth,
    redirectHandler,
  };
};

export default useIsAuth;
