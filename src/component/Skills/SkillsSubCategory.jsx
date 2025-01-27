import React from "react";
import stateModalSubCategoryGroup from "./stateModalSubCategoryGroup";
import "./SkillsSubCategory.css";

const SkillsSubCategory = (props) => {
  const open = stateModalSubCategoryGroup((state) => state.open);
  const setSelectedData = stateModalSubCategoryGroup((state) => state.setSelectedData);

  const handleClick = () => {
    setSelectedData(props); 
    open();  
  };

  return (
    <div className="container-card">
    <button  className="title-card" onClick={handleClick}>
      <div className="imgContainer">
        <img src={props.imgUrl} alt={props.title}   />
      </div>
      <div className="content">
        <span>{props.title}</span>
      </div>
      </button>
  </div>
  );
};

export default SkillsSubCategory;
