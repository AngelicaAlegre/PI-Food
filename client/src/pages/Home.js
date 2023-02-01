import SearchBotton from "../components/SearchButton";
import axios from "axios";
import React from "react";
import { getRecipes } from "../services/recipes";

const Home = () => {
  const [recipes, setRecipes] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      setRecipes(await getRecipes());
    }
    fetchData();
  }, []);
  return (
    <div id="home">
      <h1>Main route</h1>
      <SearchBotton></SearchBotton>
      {recipes.map((recipesObject) => {
        return (
        <article>
            <h3>{recipesObject.name}</h3>
        </article>
        );
      })}
    </div>
  );
};

export default Home;
