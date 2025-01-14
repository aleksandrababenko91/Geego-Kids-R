import React from "react";
import { Link } from "react-router-dom";
import "./SubCategory.css";
import "../index.css";

const ToddlersSubCategory = (props) => {

  return (
    <div>
      <Link to={`/Toddlers/${props.title}`}>
        <div
          className="SubCategory ToddlersSubCategory"
          style={{ borderBottom: "1px solid rgb(128, 128, 128, 0.3)" }}>
          <div>
            <img src={props.imgUrl} alt={props.title} />
          </div>
          <div>
            <p>{props.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ToddlersSubCategory;