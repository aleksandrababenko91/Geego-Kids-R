import React from "react";
import "./ToddlersTask.css";
import stateVideoModal from './stateVideoModal';

const ToddlersTask = (props) => {
  const open = stateVideoModal((state) => state.open);
  const setSelectedTask = stateVideoModal((state) => state.setSelectedTask);

  const handleClick = () => {
    setSelectedTask({
      taskName: props.title,
      taskVideo: props.video,
      taskDescription: props.description,
    });
    open();
  };

  return (
    <div className="card-task" onClick={handleClick}>
        <img className="image-task" src={props.imgUrl} alt={props.title} />
      <div>{props.title}</div>
    </div>
  );
};

export default ToddlersTask;
