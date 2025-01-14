import { Link } from "react-router-dom";
import React from "react";

import "./ToddlersTaskGroup.css";


const ToddlersSubCategory = (props) => {
  return (
    <Link to={`/Toddlers/${props.title}`}>
      <div className="task-group-cardContainer">
        <div className="task-group-card">
          <img src={props.imgUrl} alt="image" fill sizes="100%"  className="iconWrapper"/>
        </div>
        <div >
          <h2 className="task-group-header">{props.title}</h2>
        </div>
      </div>
    </Link>
);
};

export default ToddlersSubCategory;