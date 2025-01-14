import React, { useState } from "react";
import ToddlersVideo from "./ToddlersVideo";
import "./Task.css";
import "../index.css";

const ToddlersTask = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlex, setIsFlex] = useState("none");

  const handleClick = () => {
    setIsOpen(true);
    setIsFlex("flex");
  };

  return (
    <div>
      <div className="Task ToddlersTask" onClick={handleClick}>
        <div>
          <img 
            src={props.imgUrl} 
            alt={props.title} 
          />
        </div>
        <div>{props.title}</div>
      </div>
      <ToddlersVideo
        video={props.video}
        title={props.title}
        trigger={isOpen}
        display={isFlex}
        setTrigger={setIsOpen}
      />
    </div>
  );
};

export default ToddlersTask;