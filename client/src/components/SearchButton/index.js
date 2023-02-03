import React from "react";
import styles from "../SearchButton/SearchButton.module.css";
import { useDispatch } from "react-redux";
import { filterByName } from "../../redux/actions";
const { SearchButton_container, SearchButton_input, SearchButton_see } = styles;

const SearchBotton = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(filterByName(searchValue));
  };

  return (
    <form
      className={SearchButton_container}
    >
      <input
        className={SearchButton_input}
        type="text"
        placeholder="Search Recipes"
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
      >
      </input>
      <button onClick={handleSearch} className={SearchButton_see} type="submit">
        See
      </button>
    </form>
  );
};

export default SearchBotton;
