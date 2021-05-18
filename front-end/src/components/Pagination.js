import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import query from "query-string";
export const MyPagination = ({ count }) => {
  const history = useHistory();
  const location = useLocation();
  const currPage = query.parse(location.search).page;
  const { search } = query.parse(location.search);
  const page = currPage || 1;
  const isQuery = search ? `&search=${search}` : "";
  const handleChange = (event, value) => {
    history.push(`/?page=${Number(value)}${isQuery}`);
  };

  return (
    <div className="w-100 d-flex justify-content-center mt-3">
      <Pagination
        page={Number(page)}
        onChange={handleChange}
        count={count}
        color="primary"
        style={{ color: "white !important" }}
      />
    </div>
  );
};

export default MyPagination;
