import React from "react";
import { useParams } from "react-router";
import ChallengesTask from "./ChallengesTask";
import "./ChallengesTasks.css";

const ChallengesTasks = (props) => {
  const { title } = useParams();

  return (
    <div className="section-tasks">
      {props.challengesState && props.challengesState.map((challengesSubcategory) => {
        return challengesSubcategory.challenges
          .filter((challenge) => challenge.title === title)
          .map((challenge, index) => {
            return (
              <div key={index}>
                  <h2 className="title-tasks">{challenge.title}</h2>
                  {/* <p className="title-tasks">{challenge.description}</p> */}
                <ul className="list-tasks">
                  {challenge.task_groups.map((tasks) => {
                    return tasks.tasks.map((task) => {
                      return (
                          <ChallengesTask
                            key={task.id}
                            imgUrl={task.thumbnail}
                            title={task.title}
                            video={task.video}
                            description={task.description}
                          />
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