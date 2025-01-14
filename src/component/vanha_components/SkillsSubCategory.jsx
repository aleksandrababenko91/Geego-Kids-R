import React, { useState } from "react";
import SkillsTaskGroup from "./SkillsTaskGroup.jsx";
import "./SubCategory.css";
import "../index.css";

const SkillsSubCategory = (props) => {
  const [state, setState] = useState(false);

  const showDropDown = () => {
    setState(!state);
  };

  return (
    <>
      <div className="SubCategory SkillsSubCategory" onClick={showDropDown}>
        <div>
          {props.imgUrl != null && <img
          src={props.imgUrl}
          alt={props.title}
        />}
        {props.imgUrl == null && <img
          src="/image/ikoni_koulut.png"
          alt={props.title}
        />}
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
      <ul className="task-groups" >
        {state
          ? props.sportschools.map((skill) => {
            return (
              <li key={skill.id}>
                <SkillsTaskGroup
                  title={skill.title}
                  description={skill.description}
                  //key={skill.id}
                  imgUrl={skill.sportschool_task_groups[0].sportschool_tasks[0].thumbnail}
                  skill={skill}
                />
              </li>
            );
          })
          : null}
      </ul>
    </>
  );
};

export default SkillsSubCategory;
