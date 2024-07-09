import React from "react";
import "./product.scss";
import naruto from "../../assets/naruto.jpeg";
import { useNavigate } from "react-router-dom";
function Products() {
  const navigate = useNavigate();
  return (
    <div className="Products" onClick={() => navigate("/products/bkb")}>
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
