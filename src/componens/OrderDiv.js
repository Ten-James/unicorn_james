import React from "react";

export default function OrderDiv(props) {
  return (
    <div className="order-main">
      <div className="container">
        <button className="exitbutton" onClick={props.exitclick}>
          <i className="far fa-times-circle"></i>
        </button>
        <h1>
          <div className="left">SHIPPING ADDRESS</div>
          <div className="right">ORDER</div>
        </h1>
        <div className="flexbox">
          <div className="split">
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
              <p>Email</p>
              <input type="text" />
            </div>
          </div>
          <div>{/* im just a gap xd */}</div>
          <div className="black"></div>
        </div>
      </div>
    </div>
  );
}
