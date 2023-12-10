import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const FilmItem = ({ item }: { item: Film }) => {
  return (
    <Link to={`/item/${item.title}?category=films`}>
      <div className="wrapper container">
        <div className="wrapper">
          <h1>{item?.title} </h1>
          <p>{item?.producer}</p>
        </div>
      </div>
    </Link>
  );
};

export default FilmItem;
