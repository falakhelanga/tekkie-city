import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import queryString from "query-string";

const useRedirect = () => {
  const location = useLocation();
  const history = useHistory();
  const { redirect } = queryString.parse(location.search);

  const path = redirect ? redirect : "/";
  const { token } = useSelector((state) => state.login);

  useEffect(() => {
    if (token !== null) history.push(path);
  }, [token, history, path]);
};

export default useRedirect;
