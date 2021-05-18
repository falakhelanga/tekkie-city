import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import Search from "../components/Search";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [showBlack, setShowBlack] = useState(false);
  const headerClasses = ["header_wrapper ", showBlack && "nav_black"];

  useEffect(() => {
    const blackNav = () => {
      if (window.scrollY > 100) {
        setShowBlack((currentValue) => true);
      } else {
        setShowBlack((currentValue) => false);
      }
    };
    const showHeader = () => {
      window.addEventListener("scroll", blackNav);
    };

    showHeader();
    return () => {
      window.removeEventListener("scroll", blackNav);
    };
  }, []);
  return (
    <div className={headerClasses.join(" ")}>
      <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />

      <NavigationBar setOpenSearch={setOpenSearch} />
    </div>
  );
};

export default Header;
