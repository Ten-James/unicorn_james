import React from "react";

export default function ProductDiv(props) {
  return (
    <div className="prod-item">
      <h2>{props.item.name}</h2>
      <div className="img">
        <div>IMG</div>
      </div>
      <p className="prod-desc">{props.item.desc}</p>
      <div className="split">
        <h3>
          <div className="hint">Cost:</div>
          {props.item.cost}
        </h3>
        <button onClick={props.onclick}>
          BUY <i className="fas fa-shopping-basket" />
        </button>
      </div>
    </div>
  );
}
