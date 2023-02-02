import SearchBotton from "../components/SearchButton";
import React from "react";
import { getRecipes, getRecipesFake } from "../services/recipes";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setRecipes } from "../redux/actions";
const { home_card_container } = styles;

const Home = () => {
  //const [recipes, setRecipes] = React.useState([]);
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  //Me voy a ejecutar solamente cuando aparezca por primera vez
  React.useEffect(() => {
    //async function fetchData() {
      //setRecipes(await getRecipesFake());
      //console.log(await getRecipesFake());
      dispatch(setRecipes());
    //fetchData();
  }, []);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [actualPagination, setActualPagination] = React.useState([]);

  function handleClick (number){
    setPageNumber(number);
    window.scrollTo(0, 0);
    
  }
  React.useEffect(() => {
    const offset = pageNumber * 9 - 10;
    const actualItems = recipes.filter(
      (item, index) => index > offset && index < pageNumber * 9
    );
    setActualPagination(actualItems);
  }, [pageNumber, recipes]);
  return (
    <section id="home">
      <h1>Main route</h1>
      <SearchBotton></SearchBotton>
      <div className={home_card_container}>
        {actualPagination.map((recipesObject) => {
          return (
            <Card
              name={recipesObject.name}
              image={recipesObject.image}
              diets={recipesObject.diets}
            />
          );
        })}
      </div>
      <Pagination
        pageNumber={pageNumber}
        totalItems={recipes.length}
        handleClick={handleClick}
      />
    </section>
  );
};
export default Home;