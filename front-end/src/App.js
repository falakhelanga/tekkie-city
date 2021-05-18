import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Body from "./layouts/Body";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Cart from "./screens/Cart";
import Products from "./screens/Products";
import SingleProduct from "./screens/SingleProduct";
import WishList from "./screens/WishList";
import Register from "./screens/Register";
import Signin from "./screens/Signin";
import CheckOut from "./screens/CheckOut";
import LogOut from "./screens/LogOut";
import CreateReview from "./screens/CreateReview";
import Orders from "./screens/Orders";
import OrderDetails from "./screens/OrderDetails";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Body>
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/signin" component={Signin} />
            <Route path="/logout" component={LogOut} />
            <Route path="/register" component={Register} />
            <Route path="/list" component={WishList} />
            <Route path="/orders/:id" component={OrderDetails} />
            <Route path="/orders" component={Orders} />
            <Route path="/cart" component={Cart} />
            <Route path="/createReview/:id" component={CreateReview} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/products/:id" component={SingleProduct} />
          </Switch>
        </Body>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
