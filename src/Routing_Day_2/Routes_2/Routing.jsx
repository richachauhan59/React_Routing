import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from '../Navbar_2/Navbar'
import { Home } from "./Home";
import { Product } from "./ProductMain";
import { ProductP } from "./ProductP"

function Routing() {
  return (
    <>
      <Route path="/" render={() => <Navbar />} />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route
          path="/products/:id"
          render={(props) => <ProductP {...props} />}
        />
        <Route path="/products" render={() => <Product />} />
        <Route>
          <div>Error 404 </div>
          <Link to="/">GO BACK HOME</Link>
        </Route>
      </Switch>
    </>
  );
}

export { Routing };