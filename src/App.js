import "./styles/App.css";

import { React, useState } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Products from "./componens/Products";
import Contact from "./componens/Contact";
import About from "./componens/About";
import CartItem from "./componens/CartItem";

import items from "./source.js";

function App() {
  const [Cart, setCart] = useState(false);

  const [AllItems, setAllItems] = useState(items);
  const [CartItems, setCartItems] = useState(items);

  function removeItem(item, get, set) {
    var items = [...get];
    items = items.filter((x) => x !== item);
    set(items);
  }

  return (
    <Router>
      <div className="App">
        <nav className="header">
          <Link to="/">
            <h1>SPACE SHOP</h1>
          </Link>
          <div className="nav-rightside">
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  Products
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <Link to="#" className="nav-cart" onClick={() => setCart(!Cart)}>
                <i className="fas fa-shopping-cart" />
              </Link>
              <div className="cart-parrent">
                <CSSTransition
                  in={Cart === true}
                  unmountOnExit
                  timeout={200}
                  classNames="cart-ani"
                >
                  <div className="cart-display">
                    <h2>
                      Your Cart <div className="hint">Click to remove</div>
                    </h2>
                    <div>
                      {CartItems.map((x) => (
                        <CartItem
                          key={x.id}
                          item={x}
                          onClick={() => removeItem(x, CartItems, setCartItems)}
                        />
                      ))}
                      {CartItems.length === 0 ? (
                        <div>No Items in Cart</div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>
                      <h3>
                        <div className="hint">Cost</div>
                        {CartItems.reduce((a, b) => a + b.cost, 0)}
                      </h3>
                      <button>Clear</button>
                      <button>Order</button>
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/">
            <Products prods={AllItems}></Products>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
