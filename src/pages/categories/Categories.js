import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./categories.scss";
import Products from "../../components/product/Products";
function Categories() {
  const navigate = useNavigate();
  const params = useParams();

  const [categoryId, setcategoryId] = useState("");
  const [categoryList, setCategoryList] = useState([
    {
      id: "comics",
      value: "Comics",
    },

    {
      id: "Shows",
      value: "Tv Shows",
    },

    {
      id: "sports",
      value: "Sports",
    },
  ]);

  useEffect(() => {
    setcategoryId(params.categoryId);

    //api call
  }, [params]);

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`);
  }
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
              {categoryList.map((items) => (
                <div key={items.id} className="filter-radio">
                  <input
                    name="category"
                    value={items.id}
                    type="radio"
                    id={items.id}
                    checked={items.id === categoryId}
                    onChange={updateCategory}
                  />
                  <label htmlFor={items.id}>{items.value}</label>
                </div>
              ))}
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
