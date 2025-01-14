import React from "react";
import { useParams } from "react-router";
import ToddlersTask from "./ToddlersTask";
import "./ToddlersTasks.css";
import ModalToddlersVideo from './ModalToddlersVideo';

const ToddlersTasks = (props) => {
  const { title } = useParams();

  return (
    <div className="section-tasks">
      {props.toddlersState && props.toddlersState.map((toddlersSubcategory) => {
        return toddlersSubcategory.toddlers
          .filter((toddler) => toddler.title === title)
          .map((toddler, index) => {
            return (
              <div key={index}>
                <div className="headerContainer-tasks">
                  <h1 className="title-Toddlers-tasks">{toddler.title}</h1>
                  <p className="text-tasks">{toddler.description}</p>
                </div>
                <ul className="list-tasks">
                  {toddler.task_groups.map((tasks) => {
                    return tasks.tasks.map((task) => (
                        <ToddlersTask
                          key={task.id}
                          imgUrl={task.thumbnail}
                          title={task.title}
                          video={task.video}
                          description={task.description}
                        />
                    ));
                  })}
                </ul>
              </div>
            );
          });
      })}
      <ModalToddlersVideo />
    </div>
  );
};

export default ToddlersTasks;
