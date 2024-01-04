import React from "react";
import { Link } from "react-router-dom";
import "./TaskGroup.css";
import "../index.css";

const ChallengesTaskGroup = (props) => {
  return (
    <div>
      <Link to={`/Challenges/${props.title}`}>
        <div className="TaskGroup ChallengesTaskGroup">
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

export default ChallengesTaskGroup;