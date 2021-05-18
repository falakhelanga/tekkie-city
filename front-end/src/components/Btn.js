import React from "react";

const Btn = ({ btnClick, children }) => {
  return (
    <>
      <button onClick={btnClick} type="button" className="btn1 text-uppercase">
        {children}
      </button>
    </>
  );
};

export default Btn;
