import React from "react";
import dummyImg from "../../assets/naruto.jpeg";
import { IoClose } from "react-icons/io5";
import "./Cartitems.scss";
function Cartitems() {
  return (
    <div className="Cart-product">
      <div className="item-img">
        <img src={dummyImg} alt="image-jpeg" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">Product title</p>
          <p className="price">Rs 4585</p>
          <div className="quantity-selector">
            <span className="btn decrement">-</span>
            <span className="quantity">3</span>
            <span className="btn increment">+</span>
          </div>
          <p className="total-price">SubTotal Rs 4589</p>
        </div>
      </div>

      <div className="item-remove">
        <IoClose />
      </div>
    </div>
  );
}

export default Cartitems;
