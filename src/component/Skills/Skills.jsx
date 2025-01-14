import React, { useState } from "react";
import SkillsSubCategory from './SkillsSubCategory';
import './Skills.css';
import { useTranslation } from 'react-i18next';
import ModalSkillsTaskGroup from './ModalSkillsTaskGroup';
import InputSearch from '../shared/InputSearch';
import LoadMore from '../shared/LoadMoreBtn';


const Skills = (props) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(16); 

  const skillsState = Array.isArray(props.skillsState) ? props.skillsState : [];

  const filteredCategories = searchQuery
    ? skillsState.filter((category) =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : skillsState;

  const validCategories = filteredCategories.filter(
    (category) => Array.isArray(category.sportschools) && category.sportschools.length > 0
  );

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  return (
    <div className="section-skills">
      <div className="wrapper-skills">
        <div className="headerContainer">
          <div className="titleDots">
          <h1 className="title-skills">{t('home-sport')}</h1>
          <div className="skills main-category">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
          </div>
          <p className="text">{t('home-sport-description')}</p>
        </div>
      </div>
      <div className="skillsContainer">
        <InputSearch
          className="search-skills"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Hakusana"
        />
        <div className="content-skills">
          {validCategories.slice(0, visibleCount).map((skill) => (
            <SkillsSubCategory
              key={skill.id}
              title={skill.title}
              imgUrl={skill.icon}
              sportschools={skill.sportschools}
              skill={skill}

            />
          ))}
        </div>
      {visibleCount < validCategories.length && (
        <LoadMore onClick={handleLoadMore} />
      )}
      </div>
      <ModalSkillsTaskGroup />
    </div>
  );
};

export default Skills;
