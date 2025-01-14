import React from "react";
import { useTranslation } from 'react-i18next';
import SkillsSubCategory from "./SkillsSubCategory";
import "./Skills.css";
import "../index.css";

const Skills = (props) => {

  const { t } = useTranslation();

  return (
    <div className="Skills main-category">
      <h2>
        {t('home-sport')}
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </h2>
      <p>
         {t('home-sport-description')}
      </p>
      <div className="sub-categrory-group">
        {props.skillsState && props.skillsState.map((skillsSubCategory) => {
          return skillsSubCategory.sportschools.length > 0 ? (
            <div className="sub-category" key={skillsSubCategory.id}>
              <SkillsSubCategory
                title={skillsSubCategory.title}
                //key={skillsSubCategory.id}
                imgUrl={skillsSubCategory.icon}
                sportschools={skillsSubCategory.sportschools}
              />
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
