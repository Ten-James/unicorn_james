import React from "react";

export default function ProductDiv(props) {
  return (
    <div className="prod-item">
      <h2>{props.item.name}</h2>
      <div className="img">
        <div>IMG</div>
      </div>
      <p
        className="prod-desc"
        dangerouslySetInnerHTML={{ __html: props.item.description }}
      />
      <div className="split">
        <h3>
          <div className="hint">Cost:</div>
          {props.item.price.formatted_with_symbol}
        </h3>
        <button onClick={props.onclick}>
          BUY <i className="fas fa-shopping-basket" />
        </button>
      </div>
    </div>
  );
}
