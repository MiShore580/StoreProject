import React, { useState } from "react";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";
import "./Products.css";

const Products = (props) => {
  const [sale, setSale] = useState(true);
  console.log(props.products);
  // state = {
  //   sale: true,
  // };

  const saleOver = () => {
    setSale((sale) => !sale);
    // console.log(sale);
  };

  let filterCategory;

  if (props.newCategory === "all") {
    filterCategory = props.products;
  } else {
    filterCategory = props.products.filter(
      ({ category }) => category === props.newCategory
    );
  }

  // console.log(props.wearHouse);
  const listItems = filterCategory.map(({ id, image, title, price }) => (
    <Product
      onSale={sale}
      id={id}
      key={id}
      title={title}
      image={image}
      price={price}
    />
  ));
  console.log(listItems);

  return (
    <div>
      <SaleCountDown endSale={saleOver} />
      <section className="products" id="product">
        {listItems}
      </section>
    </div>
  );
};

export default Products;
