import React from "react";
import { useDispatch } from "react-redux";
import { sortByAZ } from "../../redux/actions";

const Sort = () => {
  const [azSort, setAZSort] = React.useState("");
  const dispatch = useDispatch();
//Ordenamiento: alfabeticamnete, de mayor a menor y de menor a mayor.
  const handleChange = (event) => {
    setAZSort(event.target.value);
    dispatch(sortByAZ(azSort === "A-Z" ? true : false));
  };

  return (
    <select onChange={handleChange} value={azSort}>
      <option value="DEFAULT">Sort alphabetically</option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
    </select>
  );
};

export default Sort;
