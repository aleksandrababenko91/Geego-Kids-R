import React from "react";
import { useParams } from "react-router";
import SkillsTask from "./SkillsTask";
import "./Tasks.css";
import "../index.css";

const SkillsTasks = (props) => {
  const { title } = useParams();

  return (
    <div className="Tasks SkillsTasks">
      {props.skillsState && props.skillsState.map((skillsSubCategory) => {
        return skillsSubCategory.sportschools.filter((skill) => skill.title === title).map((skill, index) => {
          return (
            <div>
              <div>
                <h2 key={index}>
                  {skill.title}
                  <i className="fa-solid fa-circle"></i>
                  <i className="fa-solid fa-circle"></i>
                  <i className="fa-solid fa-circle"></i>
                </h2>
                <p>{skill.description}</p>
              </div>
              <ul>
                {skill.sportschool_task_groups.map((tasks) => {
                  return tasks.sportschool_tasks.map((task) => {
                    return (
                      <li>
                        <SkillsTask
                          imgUrl={task.thumbnail}
                          title={task.title}
                          video={task.video}
                          description={task.description}
                        />
                      </li>
                    );
                  });
                })}
              </ul>
            </div>
          )
        })
      })}
    </div>
  )
};

export default SkillsTasks;