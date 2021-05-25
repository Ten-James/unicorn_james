import React from "react";

export default function CartItem(props) {
  if (!props.item) return <></>;
  return (
    <div className="cart-item" onClick={props.onClick}>
      <div></div>
      <div className="center">
        <h4>{props.item.name}</h4>
        <p>{props.item.desc.substr(0, 25) + "..."}</p>
      </div>
      <div>{props.item.cost}</div>
    </div>
  );
}
