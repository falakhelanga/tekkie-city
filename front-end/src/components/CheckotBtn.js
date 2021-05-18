import React from "react";
import { useHistory } from "react-router-dom";

const CheckotBtn = () => {
  const history = useHistory();

  return (
    <button
      onClick={() => {
        history.push("/checkout");
      }}
      className="w-100 bg-dark text-capitalize d-flex justify-content-center align-items-center mx-auto"
      style={{
        borderRadius: "50px",
        color: "white",
        fontWeight: "bold",
        height: "50%",
        border: "1px solid white",
        outline: "none",
      }}
    >
      {" "}
      proceed to checkout
    </button>
  );
};

export default CheckotBtn;
