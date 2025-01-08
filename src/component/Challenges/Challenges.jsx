import React from "react";
import ChallengesSubCategory from './ChallengesSubCategory';
import './Challenges.css';
import { useTranslation } from 'react-i18next';
import ModalChallengesTaskGroup from './ModalChallengesTaskGroup';

const Challenges = (props) => {
  const { t } = useTranslation();

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
        <div className="content-challenges">
          {props.challengesState && props.challengesState.map((challengesSubcategory) => (
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
      {/* Подключаем модальное окно */}
          <ModalChallengesTaskGroup />
    </div>
  );
};

export default Challenges;
