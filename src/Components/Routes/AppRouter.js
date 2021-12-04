import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../../Pages/Home/HomePage";
import ProductsPage from "../../Pages/Products/ProductsPage";
import Shop from "../../Pages/Shop/Shop";
import { StoreContext } from "../../Store/StoreProvider";
import NavBar from "../Custom/Navbar/Navbar";

const AppRouter = () => {
  const [store] = useContext(StoreContext);
  useEffect(() => {
    localStorage.setItem("shop-products", JSON.stringify(store));
  }, [store]);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <NavBar>
            <Route exact path="/Products">
              <ProductsPage />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
          </NavBar>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
