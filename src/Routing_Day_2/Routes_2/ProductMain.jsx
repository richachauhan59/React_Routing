import React from "react";
import { Link, Route } from "react-router-dom";
import { AppContext } from "../Context/context";
import { ProductI} from "./ProductI";

function Product() {

  return (
    <AppContext.Consumer>
      {({ data }) => {
        return (
          <div>
            {data.map((item) => (
              <ProductI data={item} key={item.id} />
            ))}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export { Product };
