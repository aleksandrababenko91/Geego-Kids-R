import React, { useState } from "react";
import SkillsVideo from "./SkillsVideo";
import "./Task.css";
import "../index.css";
import "../index.css";

const SkillsTask = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlex, setIsFlex] = useState("none");

  const handleClick = () => {
    setIsOpen(true);
    setIsFlex("flex");
  };

  return (
    <div>
      <div className="Task SkillsTask" onClick={handleClick}>
        <div>
          <img src={props.imgUrl} alt={props.title} />
        </div>
        <div>{props.title}</div>
      </div>
      <SkillsVideo
        video={props.video}
        title={props.title}
        trigger={isOpen}
        description={props.description}
        display={isFlex}
        setTrigger={setIsOpen}
      />
    </div>
  );
};

export default SkillsTask;