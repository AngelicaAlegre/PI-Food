import React from "react";
import styles from "../Card/Card.module.css";
import Pill from "../Pill";
const { card_container, card_title, card_pill_container } = styles;

const Card = (props) => {
  return (
    <article className={card_container}>
      <img src={props.image} alt={props.name} />
      <h4 className={card_title}>{props.name}</h4>
      <div className={card_pill_container}>
      {props.diets.map((datos) => (
        <Pill title={datos} />
      ))}
      </div>
    </article>
  );
};

export default Card;
