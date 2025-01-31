import React from "react";
import { useParams } from "react-router";
import SkillsTask from "./SkillsTask";
import "./SkillsTasks.css";
import ModalSkillsVideo from './ModalSkillsVideo';

const SkillsTasks = (props) => {
  const { title } = useParams();

  return (
    <div className="section-tasks">
      {props.skillsState && props.skillsState.map((skillsSubcategory) => {
        return skillsSubcategory.sportschools
          .filter((skill) => skill.title === title)
          .map((skill, index) => {
            return (
              <div key={index}>
                <div className="headerContainer-tasks">
                  <h1 className="title-skills-tasks">{skill.title}</h1>
                  <p className="text-tasks">{skill.description}</p>
                </div>
                <ul className="list-tasks">
                  {skill.sportschool_task_groups.map((tasks) => {
                    return tasks.sportschool_tasks.map((task) => (
                        <SkillsTask
                          key={task.id}
                          imgUrl={task.thumbnail}
                          title={task.title}
                          video={task.video}
                          description={task.description}
                          allTasks={tasks.sportschool_tasks}
                          allTaskGroups={skill.sportschool_task_groups} 
                        />
                    ));
                  })}
                </ul>
              </div>
            );
          });
      })}
      <ModalSkillsVideo />
    </div>
  );
};

export default SkillsTasks;
