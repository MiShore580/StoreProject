import React from "react";
import sale from "./sale.png";
import "./Product.css";

const Product = (props) => {
  const { id, image, title, price, onSale } = props;
  console.log(props);
  return (
    <div className="product-card">
      {" "}
      <a href={`/products/${id}`}>
        {price < 100 && onSale && (
          <img className="sale3" src={sale} alt="sale" />
        )}
        <div className="product-image">
          <img src={image} alt={""} />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
        </div>{" "}
      </a>
    </div>
  );
};

export default Product;
