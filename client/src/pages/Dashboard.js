//Aca mi landing page.

import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../redux/actions"
const { dashboard_title, dashboard_container, dashboard_button } = styles;

const Dashboard = () => {
  const dispatch = useDispatch();
  React.useEffect (() => {
    dispatch(setRecipes());
  }, [dispatch]);
  return (
    <div id="dashboard">
    <div className={dashboard_container}>
      <h1 className={dashboard_title}> Henry FOOD </h1>
      <Link to="/home">
        {/* Componente LINK - Generar una redireccion hacia una ruta */}
        <button className={dashboard_button}>Start of Recipes</button>
      </Link>
    </div>
    </div>
  );
};

export default Dashboard;