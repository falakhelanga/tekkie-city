import React, { useRef } from "react";
import { NavLink, withRouter } from "react-router-dom";
import useSearch from "../helpefunctions/search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import useIsAuth from "../helpefunctions/isAuth";
import { NavDropdown } from "react-bootstrap";
import { IconButton } from "@material-ui/core";

const NavigationBar = ({ setOpenSearch, history }) => {
  const searchRef = useRef();
  const { searchHandler } = useSearch(searchRef);
  const { products } = useSelector((state) => state.cart);
  const totalItems = products.reduce((acc, curr) => acc + curr.qty, 0);
  const { isAuth } = useIsAuth();
  return (
    <div className="navigation_wrapper">
      <div className=" mobile_navigation_container pt-3">
        {isAuth ? (
          <NavDropdown
            title={
              <i className="fas fa-bars text-white mobile_menu menu_drop_down"></i>
            }
          >
            <NavDropdown.Item>
              <NavLink to="/orders">Orders</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/logout">Log out</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <IconButton
            style={{ outline: "none" }}
            onClick={() => {
              history.push("/signin");
            }}
          >
            <AccountCircleIcon className="text-white" />
          </IconButton>
        )}

        <div className="logo_div">
          <NavLink to="/" className="logo_link">
            <h1 className="logo text-uppercase mt-1 text-white">tekkie city</h1>
          </NavLink>
        </div>

        <div className="search_div">
          <SearchIcon
            className="text-white search_icon"
            onClick={() => {
              setOpenSearch((currentValue) => true);
            }}
          />
        </div>
      </div>
      {/* DESKTOP NAVIGATION */}
      <div className="desk_top_navigation container pt-3 ">
        {/* LOGO DIV */}
        <div className="desktop_logo_div">
          <NavLink to="/" className="logo_link">
            <h1 className="logo text-uppercase mt-1 text-white">tekkie city</h1>
          </NavLink>
        </div>

        <form
          onSubmit={(e) => {
            searchHandler(e);
          }}
          className="search_div_d pr-2 py-1"
        >
          <input
            ref={searchRef}
            type="text"
            placeholder="Search..."
            className="text-white"
          />
          <IconButton type="submit" style={{ outline: "none" }}>
            <SearchIcon className="text-white" />
          </IconButton>
        </form>

        <div className="dektop_navigation_div">
          <NavLink to="/cart">
            <Badge
              color="secondary"
              badgeContent={totalItems}
              anchorOrigin={{
                horizontal: "left",
                vertical: "top",
              }}
            >
              <ShoppingCartIcon className="text-white" />
            </Badge>
          </NavLink>

          <div
            className="wish_list_div mx-5"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <NavLink to="/list">
              <FavoriteIcon className="text-white" />
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {isAuth ? (
              <NavDropdown title={<AccountCircleIcon className="text-white" />}>
                <NavDropdown.Item>
                  <NavLink to="/orders">Orders</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/logout">Log out</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <IconButton
                style={{ outline: "none" }}
                onClick={() => {
                  history.push("/signin");
                }}
              >
                <AccountCircleIcon className="text-white" />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationBar);
