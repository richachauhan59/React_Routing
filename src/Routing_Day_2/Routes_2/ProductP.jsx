import React from "react";
import { AppContext } from "../Context/context";

class ProductP extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { data } = this.context;
    const item = data.find((item) => item.id === Number(id));
    return (
      <div>
        <h3> Name: {item.name} </h3>
        <h3> Price: {item.price} </h3>
      </div>
    );
  }
}

ProductP.contextType = AppContext;

export { ProductP };
