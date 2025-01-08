import React from "react";
import { Link } from "react-router-dom";
import "./ChallengesTaskGroup.css";


const ChallengesTaskGroup = (props) => {
  return (
    <div>
      <Link to={`/Challenges/${props.title}`}>
        <div className="card">
          <div className="cardContainer">
            <img src={props.imgUrl} alt={props.title}  className="iconWrapper"/>
          </div>
          <div>
            <h2 className="header">{props.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChallengesTaskGroup;