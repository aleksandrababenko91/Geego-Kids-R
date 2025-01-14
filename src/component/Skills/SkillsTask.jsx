import React from "react";
import "./SkillsTask.css";
import stateVideoModal from './stateVideoModal';

const SkillsTask = (props) => {
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
      <div>
        <img className="image-task" src={props.imgUrl} alt={props.title} />
      </div>
      <div>{props.title}</div>
    </div>
  );
};

export default SkillsTask;
