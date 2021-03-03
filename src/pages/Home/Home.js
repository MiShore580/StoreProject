import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import ThemeContext from "../../ThemeContext";
import "./Home.css";

const Home = () => {
  const [wearHouse, setWearHouse] = useState([]);
  const [category, setCategory] = useState("all");
  const themes = useContext(ThemeContext);
  const changeCategory = (category) => {
    setCategory(category);
  };
  console.log("themes", themes);
  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});
  const categories = Object.keys(groupBy(wearHouse, "category"));
  console.log(categories);
  useEffect(() => {
    async function fetchData() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          setWearHouse(data);
          // console.log(data);
        });
    }
    fetchData();
  }, []);
  return (
    <div style={{ background: themes.background }}>
      <div>
        <Header categories={categories} setCategory={changeCategory} />
        <Products products={wearHouse} newCategory={category} />
      </div>
    </div>
  );
};
export default Home;
