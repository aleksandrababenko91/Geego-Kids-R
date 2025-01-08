import React, { useState } from "react";
import ChallengesSubCategory from './ChallengesSubCategory';
import './Challenges.css';
import { useTranslation } from 'react-i18next';
import ModalChallengesTaskGroup from './ModalChallengesTaskGroup';
import InputSearch from '../shared/InputSearch'

const Challenges = (props) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = searchQuery
    ? props.challengesState.filter((category) =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : props.challengesState;

  return (
    <div className="section-challenges">
      <div className="wrapper-challenges">
        <div className="headerContainer">
          <div>
            <h1 className="title-challenges">{t('home-city')}</h1>
          </div>
          <div className="elips">
            <img
              className="rotate"
              src="/image/Geego.svg"
              alt="geego circle"
            />
          </div>
        </div>
        <p className="text">{t('home-city-description')}</p>
      </div>
      <div className="challengesContainer">
        <InputSearch
          className="search-challenges"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Haku sana"
        />
        <div className="content-challenges">
        {filteredCategories && filteredCategories.map((challengesSubcategory) => (
            challengesSubcategory.challenges.length > 0 && (
                <ChallengesSubCategory
                  key={challengesSubcategory.id}
                  title={challengesSubcategory.title}
                  imgUrl={challengesSubcategory.icon}
                  challenges={challengesSubcategory.challenges}
                />
            )
          ))}
        </div>
      </div>
      <ModalChallengesTaskGroup />
    </div>
  );
};

export default Challenges;
