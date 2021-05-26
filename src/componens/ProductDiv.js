import React from "react";

export default function ProductDiv(props) {
  return (
    <div className="prod-item">
      <div className="img"><div>IMG</div></div>
      <h2>{props.item.name}</h2>
      <p className="prod-desc">{props.item.desc}</p>
      <button>Add to Cart</button>
    </div>
  );
}
