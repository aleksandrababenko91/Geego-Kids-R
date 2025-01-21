import React from "react";
import "./ChallengesTask.css";
import stateVideoModal from './stateVideoModal';

const ChallengesTask = (props) => {
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

export default ChallengesTask;
