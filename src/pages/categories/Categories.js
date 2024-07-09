import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./categories.scss";
import Products from "../../components/product/Products";
function Categories() {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setcategoryId] = useState("");
  const categoryList = [
    {
      id: "comics",
      value: "Comics",
    },

    {
      id: "sports",
      value: "Sports",
    },

    {
      id: "tv-shows",
      value: "Tv-Shows",
    },
  ];
  useEffect(() => {
    setcategoryId(params.categoryId);
    // api Call
  }, [params]);
  function updatecategory(e) {
    navigate(`/category/${e.target.value}`);
  }
  return (
    <div className="Categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis, nobis. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Labore animi numquam dolor eveniet similique
              iure, minima, soluta necessitatibus incidunt saepe excepturi esse
              minus non illo!
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select className="sort-by-select" name="sort-by" id="sort-by">
                <option value="relevance">Relevance</option>
                <option value="Newest-first">Newest-first</option>
                <option value="Price-lth">Price - Low To High</option>
              </select>
            </div>
          </div>
        </div>

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
                    onChange={updatecategory}
                    checked={items.id === categoryId}
                  />
                  <label htmlFor={items.id}>{items.value}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="products-box">
            <Products />
            <Products />
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
