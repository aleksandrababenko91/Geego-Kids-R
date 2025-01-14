import React from "react";
import { Link } from "react-router-dom";
import "./SkillsTaskGroup.css";


const SkillsTaskGroup = (props) => {
  return (
      <Link to={`/Skills/${props.title}`}>
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

export default SkillsTaskGroup;