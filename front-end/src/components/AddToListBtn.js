import React from "react";
import { Spinner } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useIsAuth from "../helpefunctions/isAuth";
import { useLocation } from "react-router-dom";
const AddToListBtn = ({ handleList, id, loading }) => {
  const location = useLocation();
  const { redirectHandler } = useIsAuth();
  return (
    <button
      className="addtolist_wrapper d-flex align-items-center justify-content-center"
      disabled={loading}
      onClick={() => {
        redirectHandler(location.pathname);
        handleList(id);
      }}
    >
      {loading ? (
        <>
          {" "}
          <Spinner
            style={{ color: "white" }}
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        <>
          <AddIcon />
          <FavoriteIcon />
        </>
      )}
    </button>
  );
};

export default AddToListBtn;
