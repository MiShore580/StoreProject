import React from "react";
import Filter from "../Filter/Filter.js";
import "./Header.css";

const Header = (props) => (
  // const chec = () => {
  //   console.log(props);
  // };

  <div>
    <nav className="product-filter">
      <h1>Products</h1>

      <div className="sort">
        <Filter categories={props.categories} setCategory={props.setCategory} />

        <div
          className="collection-sort"
          // onCange={(event) => props.changCategory(event.target.value)value={props.category}}
        >
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>{" "}
  </div>
);

export default Header;
