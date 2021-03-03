import { useEffect, useState } from "react";

const ProdutsPage = ({ match }) => {
  const [products, setProducts] = useState({});
  console.log(match);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
    // console.log(data);
  }, [match.params.id]);

  console.log(match.params);
  return <div>ProdutsPage: {products ? products.title : ""}</div>;
};
export default ProdutsPage;
