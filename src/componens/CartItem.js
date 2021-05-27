import React from "react";

export default function CartItem(props) {
  if (!props.item) return <></>;
  return (
    <div className="cart-item" onClick={props.onClick}>
      <div>{props.item.quantity + "x"}</div>
      <div className="center">
        <h4>{props.item.name}</h4>
        <p>{"each for: " + props.item.price.formatted_with_symbol}</p>
      </div>
      <div>{props.item.line_total.formatted_with_symbol}</div>
    </div>
  );
}
