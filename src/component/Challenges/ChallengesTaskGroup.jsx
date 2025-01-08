import React from "react";
import { Link } from "react-router-dom";
import "./ChallengesTaskGroup.css";


const ChallengesTaskGroup = (props) => {
  return (
    <div>
      <Link to={`/Challenges/${props.title}`}>
        <div className="task-group-cardContainer">
          <div className="task-group-card">
            <img src={props.imgUrl} alt={props.title}  className="iconWrapper"/>
          </div>
          <div>
            <h2 className="task-group-header">{props.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChallengesTaskGroup;