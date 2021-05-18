import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import Badge from "@material-ui/core/Badge";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function BottomNavigationn({ history }) {
  const [value, setValue] = React.useState(0);
  const { products } = useSelector((state) => state.cart);
  const totalItems = products.reduce((acc, curr) => acc + curr.qty, 0);
  return (
    <BottomNavigation
      className="d-flex d-lg-none"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        backgroundColor: "#2c3e50",
        color: "white",
        zIndex: "99",
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        onClick={() => {
          history.push("/");
        }}
        label="Home"
        icon={<HomeIcon />}
        className="text-white"
        style={{ outline: "none" }}
      />
      <BottomNavigationAction
        onClick={() => {
          history.push("/list");
        }}
        label="Wish List"
        style={{ outline: "none" }}
        icon={<FavoriteIcon />}
        className="text-white"
      />
      <BottomNavigationAction
        onClick={() => {
          history.push("/cart");
        }}
        style={{ outline: "none" }}
        label="Cart"
        icon={
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
        }
        className="text-white"
      />
    </BottomNavigation>
  );
}

export default withRouter(BottomNavigationn);
