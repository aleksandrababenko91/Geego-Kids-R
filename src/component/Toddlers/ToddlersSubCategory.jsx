
import React from "react";
import './ToddlersSubCategory.css';
import MainLink from '../shared/MainLink/MainLink';




const ToddlersSubCategory = (props) => {
  return (
    <MainLink href={`/Toddlers/${props.title}`}>
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
    </MainLink>
);
};

export default ToddlersSubCategory;