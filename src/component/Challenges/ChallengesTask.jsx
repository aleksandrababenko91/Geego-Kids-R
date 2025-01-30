import React from "react";
import "./ChallengesTask.css";
import stateVideoModal from './stateVideoModal';

const ChallengesTask = (props) => {
  const open = stateVideoModal((state) => state.open);

  const handleClick = () => {
    if (!props.allTasks) {
      console.error("allTasks is undefined in ChallengesTask");
      return;
    }

    const tasksWithVideos = props.allTasks
      .filter(task => task.video) 
      .map(task => ({
        taskName: task.title,
        taskVideo: task.video,
        taskDescription: task.description
      }));

    const taskIndex = tasksWithVideos.findIndex(task => task.taskName === props.title);

    if (taskIndex === -1) {
      console.error("Task not found in tasksWithVideos");
      return;
    }

    open(tasksWithVideos, taskIndex);
  };

  return (
    <div className="card-task" onClick={handleClick}>
      <img className="image-task" src={props.imgUrl} alt={props.title} />
      <div>{props.title}</div>
    </div>
  );
};

export default ChallengesTask;
