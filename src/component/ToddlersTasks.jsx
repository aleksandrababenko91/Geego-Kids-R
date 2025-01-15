import React from "react";
import { useParams } from "react-router";
import ToddlersTask from "./ToddlersTask";
import "./Tasks.css";
import "../index.css";

const ToddlersTasks = (props) => {
  const { title } = useParams();

  return (
    <div className="Tasks ToddlersTasks">
      {props.toddlersState && props.toddlersState
        .filter((toddler) => toddler.title === title)
        .map((toddler, index) => {
          return (
            <div key={toddler.id}>
              <h2 key={index}>
                {toddler.title}
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle"></i>
                <i className="fa-solid fa-circle"></i>
              </h2>
              <ul>
                {toddler.tasks.map((task) => {
                  return (
                    <li key={task.id}>
                      <ToddlersTask
                        imgUrl={task.thumbnail}
                        title={task.title}
                        video={task.video}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default ToddlersTasks;