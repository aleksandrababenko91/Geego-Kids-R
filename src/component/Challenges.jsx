import React from "react";
import { useTranslation } from 'react-i18next';
import ChallengesSubCategory from "./ChallengesSubCategory";
import "./Challenges.css";


const Challenges = (props) => {

  const { t } = useTranslation();

  return (
    <div className="Challenges main-category">
      <h2>
        {t('home-city')}
        
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </h2>
      <p>
        {t('home-city-description')}
      </p>
      <div className="sub-categrory-group">
        {props.challengesState && props.challengesState.map((challengesSubcategory) => {
          return challengesSubcategory.challenges.length > 0 ? 
          (
            <div className="sub-category" key={challengesSubcategory.id}>
              <ChallengesSubCategory 
                title={challengesSubcategory.title}
                imgUrl={challengesSubcategory.icon}
                //key={challengesSubcategory.id}
                challenges={challengesSubcategory.challenges}
              />
            </div>
          ) : "";
        })}
      </div>
    </div>
  );
};

export default Challenges;
