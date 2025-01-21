import React from "react";
import { Link } from "react-router-dom";
import "./ChallengesTaskGroup.css";


const ChallengesTaskGroup = (props) => {
  return (
      <Link to={`/Challenges/${props.title}`} >
        <div className="task-group-cardContainer">
          <div className="task-group-card">
            <img src={props.imgUrl} alt="pic of task"  className="iconWrapper"/>
          </div>
          <div >
            <h2 className="task-group-header">{props.title}</h2>
          </div>
        </div>
      </Link>
  );
};

export default ChallengesTaskGroup;