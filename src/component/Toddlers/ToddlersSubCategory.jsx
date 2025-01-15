import { Link } from "react-router-dom";
import React from "react";

import './ToddlersSubCategory.css';


const ToddlersSubCategory = (props) => {
  return (
    <Link to={`/Toddlers/${props.title}`}>
    <div className="container-card">
      <div className="imgContainer">
        <img src={props.imgUrl} alt={props.title} fill sizes="100%"  />
      </div>
      <div className="content">
        <button  className="title-card" >
          <span >{props.title}</span>
        </button>
      </div>
    </div>
    </Link>
);
};

export default ToddlersSubCategory;