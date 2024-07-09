import React from "react";
import "./cart.scss";
import { IoMdClose } from "react-icons/io";
import Cartitems from "../cartItems/Cartitems";
function Cart({ onclose }) {
  return (
    <div className="Cart">
      <div className="overlay" onClick={onclose}></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={onclose}>
            <IoMdClose /> Close
          </div>
        </div>
        <div className="cart-items">
          <Cartitems />
          <Cartitems />
          <Cartitems />
        </div>

        <div className="checkout-info">
          <div className="totalamount">
            <h3 className="total-message">Total</h3>
            <h3 className="total-value">Rs 4000</h3>
          </div>
          <div className="checkout btn-primary">Checkout Now</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
