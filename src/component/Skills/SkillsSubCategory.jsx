import React from "react";
import stateModalSubCategoryGroup from "./stateModalSubCategoryGroup";
import "./SkillsSubCategory.css";

const SkillsSubCategory = (props) => {
  const open = stateModalSubCategoryGroup((state) => state.open);
  const setSelectedData = stateModalSubCategoryGroup((state) => state.setSelectedData);

  const handleClick = () => {
    setSelectedData(props); 
    open();  //Modal Window opens
  };

  return (
    <div className="container-card">
      <div className="imgContainer">
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <div className="content">
        <button className="title-card" onClick={handleClick}>
          <span>{props.title}</span>
        </button>
      </div>
    </div>
  );
};

export default SkillsSubCategory;
