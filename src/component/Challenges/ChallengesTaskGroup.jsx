import React from "react";
import { Link } from "react-router-dom";
import "./ChallengesTaskGroup.css";


const ChallengesTaskGroup = (props) => {
  return (
    <Link to={`/Challenges/${props.title}`}>
      <div className="task-group-cardContainer">
        <img src={props.imgUrl} alt={props.title} fill sizes="100%"  className="iconWrapper"/>
        <h2 className="task-group-header">{props.title}</h2>
      </div>
    </Link>
  );
};

export default ChallengesTaskGroup;