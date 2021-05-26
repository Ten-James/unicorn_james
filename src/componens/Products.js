import React from "react";
import ProductDiv from "./ProductDiv";

export default function Products(props) {
  return (
    <div>
      <h1>Produkty</h1>
      <div className="prod-grid">
        {props.prods.map((x) => (
          <ProductDiv item={x} />
        ))}
      </div>
    </div>
  );
}
