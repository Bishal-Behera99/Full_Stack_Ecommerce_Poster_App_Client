import React from "react";
import "./categories.scss";
import Products from "../../components/product/Products";
function Categories() {
  return (
    <div className="Categories">
      <div className="container">
        {/* header section */}
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>India's largest collection of wall posters</p>
          </div>

          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select name="sort-by" id="sort-by" className="select-sort-by">
                <option value="relevance">Relavance</option>
                <option value="newest-first">Newest First</option>
                <option value="price-lth">Price - low To High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Content */}

        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              <div className="filter-radio">
                <input name="category" type="radio" id="comics" />
                <label htmlFor="comics">Comics</label>
              </div>
              <div className="filter-radio">
                <input name="category" type="radio" id="Shows" />
                <label htmlFor="Shows">Tv Shows</label>
              </div>
              <div className="filter-radio">
                <input name="category" type="radio" id="sports" />
                <label htmlFor="sports">Sports</label>
              </div>
            </div>
          </div>
          <div className="product-box">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
