import React from "react";
import styles from "../Pill/Pill.module.css";
const { pill_container, pill_green, pill_aqua, pill_pink } = styles;

const Pill = (props) => {
    const colors = [pill_green, pill_aqua, pill_pink];
    const datos = colors[Math.floor(Math.random() * colors.length)];
    return (
        <span className={`${pill_container} ${datos}`}>{props.title}</span>
    );
};

export default Pill;