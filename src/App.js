import "./styles/App.css";

import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Products from "./componens/Products";
import Contact from "./componens/Contact";
import About from "./componens/About";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="header">
          <h1>SPACE SHOP</h1>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/kosik">Kosik</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
