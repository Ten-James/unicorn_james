import "./styles/App.css";

import { React, useState, useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Products from "./componens/Products";
import MainPage from "./componens/MainPage";
import Contact from "./componens/Contact";
import About from "./componens/About";
import CartItem from "./componens/CartItem";
import OrderDiv from "./componens/OrderDiv";

import commerce from "./source.js";

function App() {
  const [SlectedPage, setSlectedPage] = useState("main");
  const [CartDisplay, setCartDisplay] = useState(false);
  const [Order, setOrder] = useState(false);

  const [AllItems, setAllItems] = useState([]);
  const [CartItems, setCartItems] = useState([]);

  function order() {
    setCartDisplay(false);
    setOrder(true);
  }

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setAllItems(data);
  };

  const fetchCart = async () => {
    setCartItems(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCartItems(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCartItems(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCartItems(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCartItems(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCartItems(newCart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="header">
          <Link to="#" onClick={() => setSlectedPage("main")}>
            <h1>SPACE SHOP</h1>
          </Link>
          <div className="nav-rightside">
            <ul>
              <li>
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() => setSlectedPage("products")}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() => setSlectedPage("about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="#"
                  onClick={() => setSlectedPage("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <Link
                to="#"
                className="nav-cart"
                onClick={() => setCartDisplay(!CartDisplay)}
              >
                <i className="fas fa-shopping-cart" />
              </Link>
              <div className="cart-parrent">
                <CSSTransition
                  in={CartDisplay === true}
                  unmountOnExit
                  timeout={200}
                  classNames="cart-ani"
                >
                  <div className="cart-display">
                    <h2>
                      Your Cart{" "}
                      <div className="hint">Click for Preview -not working</div>
                    </h2>
                    <div>
                      {CartItems.line_items?.length === 0 ? (
                        <div>No Items in Cart</div>
                      ) : (
                        CartItems.line_items?.map((x) => (
                          <CartItem
                            key={x.id}
                            item={x}
                            onClick={handleUpdateCartQty}
                          />
                        ))
                      )}
                    </div>
                    <div>
                      <h3>
                        <div className="hint">Cost</div>
                        {CartItems.subtotal?.formatted_with_symbol}
                      </h3>
                      <button onClick={handleEmptyCart}>Clear</button>
                      <button onClick={order}>Order</button>
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </div>
          </div>
        </nav>
        <CSSTransition
          in={SlectedPage === "main"}
          unmountOnExit
          timeout={500}
          classNames="ani-mainpage"
        >
          <MainPage setpage={setSlectedPage} />
        </CSSTransition>
        <CSSTransition
          in={SlectedPage === "about"}
          unmountOnExit
          timeout={700}
          classNames="ani-secpage"
        >
          <About></About>
        </CSSTransition>
        <CSSTransition
          in={SlectedPage === "contact"}
          unmountOnExit
          timeout={700}
          classNames="ani-secpage"
        >
          <Contact></Contact>
        </CSSTransition>
        <CSSTransition
          in={SlectedPage === "products"}
          unmountOnExit
          timeout={700}
          classNames="ani-secpage"
        >
          <Products prods={AllItems} onclick={handleAddToCart}></Products>
        </CSSTransition>
        {Order ? (
          <OrderDiv
            cart={CartItems}
            handleUpdateCartQty={handleUpdateCartQty}
            exitclick={() => setOrder(false)}
          />
        ) : (
          <></>
        )}
      </div>
    </Router>
  );
}

export default App;
