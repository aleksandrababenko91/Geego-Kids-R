import React from "react";
import { Link } from "react-router-dom";
import "./TaskGroup.css";
import "../index.css";

const SkillsTaskGroup = (props) => {
  return (
    <div>
      <Link to={`/Skills/${props.title}`}>
        <div className="TaskGroup SkillsTaskGroup">
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

export default SkillsTaskGroup;