import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Dashboard.module.css";
const { dashboard_title, dashboard_container, dashboard_button } = styles;

const Dashboard = () => {
  return (
    <article className={dashboard_container}>
      <h1 className={dashboard_title}> Henry FOOD </h1>
      <Link to="/home">
        {/* Componente LINK - Generar una redireccion hacia una ruta */}
        <button className={dashboard_button}>Start of Recipes</button>
      </Link>
    </article>
  );
};

export default Dashboard;