import React from "react";
import { useDispatch } from "react-redux";
import { filterByDiet } from "../../redux/actions";

const DietFilter = (props) => {
  const dispatch = useDispatch();

  const [actualDiet, setActualDiet] = React.useState("");

  const handleChange = (event) => {
    dispatch(filterByDiet(event.target.value));
    setActualDiet(event.target.value);
  };

  const handleDefault = (event) => {
    dispatch(filterByDiet("DEFAULT"));
    setActualDiet("Filter by diet type");
  };

  return (
    <>
      <select onChange={handleChange} value={actualDiet}>
        <option value="DEFAULT">Filter by diet type</option>
        {props.diets.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
      {actualDiet !== "Filter by diet type" && (
        <button onClick={() => handleDefault()}>X</button>
      )}
    </>
  );
};

export default DietFilter;
