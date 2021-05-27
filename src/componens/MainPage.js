import React from "react";
import { Link } from "react-router-dom";

export default function MainPage(props) {
  return (
    <div className="mainpage">
      <div>
        <h1>
          SPACE
          <br />
          SHOP
        </h1>
        <i className="fas fa-rocket" />
        <p>Everything your rocket would need</p>
        <ul>
          <li>
            <Link to="#" onClick={() => props.setpage("products")}>
              Our Products
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => props.setpage("about")}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => props.setpage("contact")}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
