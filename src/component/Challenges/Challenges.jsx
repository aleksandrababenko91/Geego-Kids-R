import React, { useState } from "react";
import ChallengesSubCategory from './ChallengesSubCategory';
import './Challenges.css';
import { useTranslation } from 'react-i18next';
import ModalChallengesTaskGroup from './ModalChallengesTaskGroup';
import InputSearch from '../shared/InputSearch';
import LoadMore from '../shared/LoadMoreBtn';


const Challenges = (props) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(16); 

  const challengesState = Array.isArray(props.challengesState) ? props.challengesState : [];

  const filteredCategories = searchQuery
    ? challengesState.filter((category) =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : challengesState;

  const validCategories = filteredCategories.filter(
    (category) => Array.isArray(category.challenges) && category.challenges.length > 0
  );

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };


  return (
    <div className="section-challenges">
      <div className="wrapper-challenges">
        <div className="headerContainer">
          <div className="titleDots">
          <h1 className="title-challenges">{t('home-city')}</h1>
          <div className="Challenges main-category">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
          </div>
          <p className="text">{t('home-city-description')}</p>
        </div>
      </div>
      <div className="challengesContainer">
        <InputSearch
          className="search-challenges"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Hakusana"
        />
        <div className="content-challenges">
          {validCategories.slice(0, visibleCount).map((challengesSubcategory) => (
            <ChallengesSubCategory
              key={challengesSubcategory.id}
              title={challengesSubcategory.title}
              imgUrl={challengesSubcategory.icon}
              challenges={challengesSubcategory.challenges}
            />
          ))}
        </div>
      {visibleCount < validCategories.length && (
        <LoadMore onClick={handleLoadMore} />
      )}
      </div>
      <ModalChallengesTaskGroup />
    </div>
  );
};

export default Challenges;
