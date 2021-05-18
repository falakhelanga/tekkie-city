import { useHistory } from "react-router-dom";

const useSearch = (searchRef) => {
  const history = useHistory();

  const searchHandler = (e) => {
    e.preventDefault();

    if (searchRef.current.value.trim() === "") {
      history.push("/");
    } else {
      history.push(`?page=${1}&search=${searchRef.current.value}`);
    }
  };

  return { searchHandler };
};

export default useSearch;
