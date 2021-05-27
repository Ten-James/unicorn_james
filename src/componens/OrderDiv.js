import { React, useState } from "react";
import CartItem from "./CartItem";

export default function OrderDiv(props) {
  const [shipping, setShipping] = useState(false);
  const [shiptype, setshiptype] = useState("normal");

  const shipp = [
    { type: "fast", icon: "fas fa-shipping-fast", name: "Express Shipping" },
    { type: "normal", icon: "fas fa-truck", name: "Normal Shipping" },
    { type: "warehouse", icon: "fas fa-warehouse", name: "Our Warehouse" },
  ];

  function rendershipping() {
    if (shipping === false)
      return (
        <div className="form split">
          <div>
            <p>First Name</p>
            <input type="text" />
          </div>
          <div>
            <p>Second Name</p>
            <input type="text" />
          </div>
          <div>
            <p>Telephone</p>
            <input type="text" />
          </div>
          <div>
            <p>Address</p>
            <input type="text" />
          </div>
          <div>
            <p>City</p>
            <input type="text" />
          </div>
          <div>
            <p>Country</p>
            <input type="text" />
          </div>
          <div>
            <p>PostCode</p>
            <input type="text" />
          </div>
          <div>
            <p>Planet</p>
            <input type="text" />
          </div>
          <div className="email">
            <p>E-mail</p>
            <input type="text" />
          </div>
        </div>
      );
    return (
      <div className="form split-payment">
        <div className="card-number">
          <p>Card Number</p>
          <input type="text" />
        </div>
        <div className="card-exp">
          <p>Expiration Time</p>
          <input type="text" />
        </div>
        <div>
          <p>CCV</p>
          <input type="text" />
        </div>
        {shipp.map((x) => {
          if (x.type === shiptype)
            return (
              <div className="shipping selected">
                <i className={x.icon}></i>
                <h3>{x.name}</h3>
              </div>
            );
          return (
            <div className="shipping" onClick={() => setshiptype(x.type)}>
              <i className={x.icon}></i>
              <h3>{x.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="order-main">
      <div className="container">
        <button className="exitbutton" onClick={props.exitclick}>
          <i className="far fa-times-circle"></i>
        </button>
        <h1>
          <div className="left">
            {shipping ? "PAYMENT OPTIONS" : "SHIPPING ADDRESS"}
          </div>
          <div className="right">ORDER</div>
        </h1>
        <div className="flexbox">
          {rendershipping()}
          <div>{/* im just a gap xd */}</div>
          <div>
            {props.cart.line_items?.map((x) => (
              <CartItem
                key={x.id}
                item={x}
                onClick={props.handleUpdateCartQty}
              />
            ))}
            <div>
              <h2>
                Total Cost is: {props.cart.subtotal.formatted_with_symbol}
              </h2>
            </div>
          </div>
        </div>
        {!shipping ? (
          <button className="paymentbutton" onClick={() => setShipping(true)}>
            Go to Payment Options
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
