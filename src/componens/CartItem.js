import React from "react";

export default function CartItem(props) {
  if (!props.item) return <></>;
  return (
    <div className="cart-item">
      <div className="buttons">
        <button
          onClick={() => props.onClick(props.item.id, props.item.quantity + 1)}
        >
          +
        </button>
        <button
          onClick={() => props.onClick(props.item.id, props.item.quantity - 1)}
        >
          -
        </button>
      </div>
      <div>{props.item.quantity + "x"}</div>
      <div className="center">
        <h4>{props.item.name}</h4>
        <p>{"each for: " + props.item.price.formatted_with_symbol}</p>
      </div>
      <div>{props.item.line_total.formatted_with_symbol}</div>
    </div>
  );
}
