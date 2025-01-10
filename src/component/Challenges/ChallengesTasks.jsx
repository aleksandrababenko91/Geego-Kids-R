import React from "react";
import { useParams } from "react-router";
import ChallengesTask from "./ChallengesTask";
import "./ChallengesTasks.css";
import ModalChallengesVideo from './ModalChallengesVideo';

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
                <div className="headerContainer-tasks">
                  <h1 className="title-challenges-tasks">{challenge.title}</h1>
                  <p className="text-tasks">{challenge.description}</p>
                </div>
                <ul className="list-tasks">
                  {challenge.task_groups.map((tasks) => {
                    return tasks.tasks.map((task) => (
                        <ChallengesTask
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
      <ModalChallengesVideo />
    </div>
  );
};

export default ChallengesTasks;
