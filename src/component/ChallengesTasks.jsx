import React from "react";
import { useParams } from "react-router";
import ChallengesTask from "./ChallengesTask";
import "./Tasks.css";
import "../index.css";

const ChallengesTasks = (props) => {
  const { title } = useParams();

  return (
    <div className="Tasks ChallengesTasks">
      {props.challengesState && props.challengesState.map((challengesSubcategory) => {
        return challengesSubcategory.challenges
          .filter((challenge) => challenge.title === title)
          .map((challenge, index) => {
            return (
              <div key={index}>
                <div>
                  <h2>
                    {challenge.title}
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-circle"></i>
                  </h2>
                  <p>{challenge.description}</p>
                </div>
                <ul>
                  {challenge.task_groups.map((tasks) => {
                    return tasks.tasks.map((task) => {
                      return (
                        <li key={task.id}>
                          <ChallengesTask
                            //key={task.id} 
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
            );
          });
      })}
    </div>
  );
};

export default ChallengesTasks;