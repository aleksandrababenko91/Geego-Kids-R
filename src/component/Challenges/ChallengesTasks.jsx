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
                <h2 className="title-tasks">{challenge.title}</h2>
                <p className="description-tasks">{challenge.description}</p>
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
