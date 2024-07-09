import React, { useState } from "react";
import "./navbar.scss";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

function Navbar() {
  const [opencart, setopencart] = useState(false);

  return (
    <>
      <nav className="Navbar">
        <div className="container nav-container">
          <div className="nav-left">
            <ul className="link-group">
              <li className="hover-link">
                <Link className="link" to="/products?category=comic">
                  Comics
                </Link>
              </li>
              <li className="hover-link">
                <Link className="link" to="/products?category=shows">
                  TV Shows
                </Link>
              </li>
              <li className="hover-link">
                <Link className="link" to="/products?category=Sports">
                  Sports
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-center">
            <Link to="/">
              <h1 className="banner">Posterz.</h1>
            </Link>
          </div>
          <div className="nav-right">
            <div className="nav-cart" onClick={() => setopencart(!opencart)}>
              <BsCart2 className="icon" />
              <span className="cart-count center ">99+</span>
            </div>
          </div>
        </div>
        {/* >>>>> */}
      </nav>
      {opencart && <Cart onclose={() => setopencart(false)} />}
    </>
  );
}

export default Navbar;
