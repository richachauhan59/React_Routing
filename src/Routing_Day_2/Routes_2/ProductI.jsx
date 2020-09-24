import React from "react";
import { Link } from "react-router-dom";

export function ProductI({ data }) {
  return (
    <div>
      <h3> Name: {data.name} </h3>
      <h3> Price: {data.price} </h3>
      <Link to={`/products/${data.id}`}>details of the Product </Link>
    </div>
  );
}
