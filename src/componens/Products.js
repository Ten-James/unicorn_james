import React from "react";
import ProductDiv from "./ProductDiv";

export default function Products(props) {
  return (
    <div className="ani-secpage">
      <h1>Our Products</h1>
      <div className="prod-grid">
        {props.prods.map((x) => (
          <ProductDiv item={x} />
        ))}
      </div>
    </div>
  );
}
