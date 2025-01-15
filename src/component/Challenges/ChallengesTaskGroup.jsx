import React from "react";
import { Link } from "react-router-dom";
import "./ChallengesTaskGroup.css";
import MainLink from '../shared/MainLink/MainLink';
import linkTypes from '../shared/MainLink/constants';


const ChallengesTaskGroup = (props) => {
  return (
      <MainLink href={`/Challenges/${props.title}`} type={linkTypes.DEFAULT}>
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

export default ChallengesTaskGroup;