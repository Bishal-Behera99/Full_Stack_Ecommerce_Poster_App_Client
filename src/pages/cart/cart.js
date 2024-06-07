import React from "react";
import "./cart.scss";
function Cart({ onclose }) {
  return (
    <div className="Cart">
      <div className="overlay" onClick={onclose}></div>
      <div className="cart-content">
        <div className="btn-primary" onClick={onclose}>
          close
        </div>
      </div>
    </div>
  );
}

export default Cart;
