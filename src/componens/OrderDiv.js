import { React, useState, useRef } from "react";
import CartItem from "./CartItem";
import $ from "jquery";
import commerce from "../source";

export default function OrderDiv(props) {
  const [shipping, setShipping] = useState(false);
  const [shiptype, setshiptype] = useState("normal");

  const shipp = [
    { type: "fast", icon: "fas fa-shipping-fast", name: "Express Shipping" },
    { type: "normal", icon: "fas fa-truck", name: "Normal Shipping" },
    { type: "warehouse", icon: "fas fa-warehouse", name: "Our Warehouse" },
  ];

  const FirstNameref = useRef("");
  const SecondNameref = useRef("");
  const Telephoneref = useRef("");
  const Addressref = useRef("");
  const Cityref = useRef("");
  const Countyref = useRef("");
  const PostCoderef = useRef("");
  const Planetref = useRef("");
  const Emailref = useRef("");
  const CardNumberref = useRef("");
  const Expeditionref = useRef("");
  const CCVref = useRef("");

  const SendOrderToServer = () => {
    var order = {
      id: props.cart.id,
      items: props.cart.line_items,
      totalcost: props.cart.subtotal,
      userinfo: {
        first_name: FirstNameref.current.value,
        last_name: SecondNameref.current.value,
        telephone: Telephoneref.current.value,
        address: Addressref.current.value,
        city: Cityref.current.value,
        country: Countyref.current.value,
        postcode: PostCoderef.current.value,
        planet: Planetref.current.value,
        email: Emailref.current.value,
      },
      cardinfo: {
        number: CardNumberref.current.value,
        exp: Expeditionref.current.value,
        ccv: CCVref.current.value,
      },
    };
    console.log(order);
  };
  function trytogoshipping() {
    if (
      FirstNameref.current.value !== "" &&
      SecondNameref.current.value !== "" &&
      Telephoneref.current.value !== "" &&
      Addressref.current.value !== "" &&
      Cityref.current.value !== "" &&
      Countyref.current.value !== "" &&
      PostCoderef.current.value !== "" &&
      Planetref.current.value !== "" &&
      Emailref.current.value !== ""
    ) {
      $(".firstform").css("display", "none");
      $(".secform").css("display", "grid");
      return setShipping(true);
    }
    $("input").each((i, e) => {
      if (e.value === "") e.style.border = "solid 1px var(--terra-cotta)";
      else e.style.border = "solid 1px var(--cadet-blue)";
    });
    return;
  }

  const rendershipping = () => (
    <>
      <div className="firstform form split">
        <div>
          <p>First Name</p>
          <input type="text" ref={FirstNameref} />
        </div>
        <div>
          <p>Last Name</p>
          <input type="text" ref={SecondNameref} />
        </div>
        <div>
          <p>Telephone</p>
          <input type="text" ref={Telephoneref} />
        </div>
        <div>
          <p>Address</p>
          <input type="text" ref={Addressref} />
        </div>
        <div>
          <p>City</p>
          <input type="text" ref={Cityref} />
        </div>
        <div>
          <p>Country</p>
          <input type="text" ref={Countyref} />
        </div>
        <div>
          <p>PostCode</p>
          <input type="text" ref={PostCoderef} />
        </div>
        <div>
          <p>Planet</p>
          <input type="text" value="Earth" ref={Planetref} />
        </div>
        <div className="email">
          <p>E-mail</p>
          <input type="text" ref={Emailref} />
        </div>
      </div>
      <div className="secform form split-payment" style={{ display: "none" }}>
        <div className="card-number">
          <p>Card Number</p>
          <input type="text" ref={CardNumberref} />
        </div>
        <div className="card-exp">
          <p>Expiration Time</p>
          <input type="text" ref={Expeditionref} />
        </div>
        <div>
          <p>CCV</p>
          <input type="text" ref={CCVref} />
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
    </>
  );

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
          <button className="paymentbutton" onClick={trytogoshipping}>
            Go to Payment Options
          </button>
        ) : (
          <button className="paymentbutton" onClick={() => SendOrderToServer()}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}
