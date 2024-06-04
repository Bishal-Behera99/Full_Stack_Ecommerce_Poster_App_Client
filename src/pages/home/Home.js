import React from "react";
import Hero from "../../components/hero/Hero";
import "./home.scss";
import Category from "../../components/category/Category";
import Products from "../../components/product/Products";
function Home() {
  return (
    <div className="Home">
      <Hero />

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="sub-heading">
            Shop from the best,our Film and Posters Collection.
          </p>
        </div>
        <div className="content">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </section>

      {/* ?Product section */}

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="sub-heading">All New Designs,</p>
        </div>
        <div className="content">
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </section>
    </div>
  );
}

export default Home;
