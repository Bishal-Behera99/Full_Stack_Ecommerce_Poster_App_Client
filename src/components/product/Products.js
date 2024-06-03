import React from "react";
import "./product.scss";
import naruto from "../../assets/naruto.jpeg";
function Products() {
  return (
    <div className="Products">
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={naruto} alt="naruto-img" id="img" />
          </div>
        </div>

        <div className="product-info">
          <p className="title">Delux wall Hanger 23", 23x23 Solid Color</p>

          <div className="price">₹ 549</div>
        </div>
      </div>
    </div>
  );
}

export default Products;
