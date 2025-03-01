import React from "react";
import { useParams } from "react-router";
import ToddlersTask from "./ToddlersTask";
import './ToddlersTasks.css';
import ModalToddlersVideo from './ModalToddlersVideo';


const ToddlersTasks = (props) => {
  const { title } = useParams();

  return (
    <div className="section-tasks">
      {props.toddlersState && props.toddlersState
        .filter((toddler) => toddler.title === title)
        .map((toddler, index) => {
          return (
            <div key={toddler.id}>
            <div className="headerContainer-tasks">
              <h1 key={index} className="title-challenges-tasks">{toddler.title}</h1>
              <p className="text-tasks">{toddler.description}</p>
            </div>
              <ul className="list-tasks">
                {toddler.tasks.map((task) => {
                  return (
                      <ToddlersTask
                          key={task.id}
                          imgUrl={task.thumbnail}
                          title={task.title}
                          video={task.video}
                          description={task.description}
                      />
                  );
                })}
              </ul>
            </div>
          );
        })}
        <ModalToddlersVideo />
    </div>
  );
};

export default ToddlersTasks;