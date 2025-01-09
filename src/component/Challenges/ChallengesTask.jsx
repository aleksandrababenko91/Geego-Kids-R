import React, { useState } from "react";
import ChallengesVideo from "./ChallengesVideo";
import "./ChallengesTask.css";


const ChallengesTask = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlex, setIsFlex] = useState("none");

  const handleClick = (props) => {
    setIsOpen(true);
    setIsFlex("flex");
  };

  return (
    <div key={props.id}>
      <div  className="card-task" onClick={handleClick}>
          <img className="image-task" src={props.imgUrl} alt={props.title} />
          <div className="name-task">{props.title}</div>
      </div>
      <ChallengesVideo 
        //key={props.id} 
        video={props.video}
        title={props.title}
        description={props.description}
        trigger={isOpen}
        display={isFlex}
        setTrigger={setIsOpen}
        />
    </div>

  );
};

export default ChallengesTask;