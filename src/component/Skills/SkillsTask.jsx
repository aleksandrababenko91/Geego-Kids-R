import React from "react";
import "./SkillsTask.css";
import stateVideoModal from './stateVideoModal';

const SkillsTask = (props) => {


  const open = stateVideoModal((state) => state.open);
  const handleClick = () => {
    if (!props.allTasks) {
      console.error("allTasks is undefined in ChallengesTask");
      return;
    }
  
    const allTasksWithVideos = props.allTaskGroups
    .flatMap(group => group.sportschool_tasks || []) // Проверяем, что массив существует
    .filter(task => task?.video) // Проверяем, что task не undefined
    .map(task => ({
      taskName: task.title,
      taskVideo: task.video,
      taskDescription: task.description
    }));
  
  
    const taskIndex = allTasksWithVideos.findIndex(task => task.taskName === props.title);
  
    if (taskIndex === -1) {
      console.error("Task not found in tasksWithVideos");
      return;
    }
  
    open(allTasksWithVideos, taskIndex);
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
