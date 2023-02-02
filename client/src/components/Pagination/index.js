import React from "react";
import styles from "../Pagination/Pagination.module.css";
const { pagination_container, pagination_button } = styles;

const Pagination = (props) => {
  const pagesList = [...Array(Math.ceil(props.totalItems / 6) + 1).keys()];
  pagesList.shift();
  return (
    <section className={pagination_container}>
      <button className={pagination_button}>{props.pageNumber}</button>
      <div>
        {pagesList.map((page) => (
          <button
            className={pagination_button}
            onClick={() => {
              props.handleClick(page);
            }}
          >
            {String(page).length < 2 && "0"}
            {page}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Pagination;
