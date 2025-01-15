import React from "react";
import { Link } from "react-router-dom";
import "./SkillsTaskGroup.css";
import MainLink from '../shared/MainLink/MainLink';



const SkillsTaskGroup = (props) => {
  return (
      <MainLink href={`/Skills/${props.title}`}>
        <div className="task-group-cardContainer">
          <div className="task-group-card">
            <img src={props.imgUrl} alt="image" fill sizes="100%"  className="iconWrapper"/>
          </div>
          <div >
            <h2 className="task-group-header">{props.title}</h2>
          </div>
        </div>
      </MainLink>
  );
};

export default SkillsTaskGroup;