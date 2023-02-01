import React from "react";
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
const { navigation, navigation_panel, navigation_link } = styles;

const Navbar = () => {
  return (
    <nav className={navigation}>
      <ul className={navigation_panel}>
        <Link className={navigation_link}to='/about'>
          <li>About</li>
        </Link>
        <Link className={navigation_link}to='/home'>
          <li>Home</li>
        </Link>
        <Link className={navigation_link}to='/'>
          <li>Dashboard</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
