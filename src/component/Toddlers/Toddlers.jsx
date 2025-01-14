import React, { useState } from "react";
import ToddlersSubCategory from './ToddlersSubCategory';
import './Toddlers.css';
import { useTranslation } from 'react-i18next';
// import InputSearch from '../shared/InputSearch';
// import LoadMore from '../shared/LoadMoreBtn';


const Toddlers = (props) => {
  const { t } = useTranslation();

  return (
    <div className="section-toddlers">
      <div className="wrapper-toddlers">
        <div className="headerContainer">
          <div className="titleDots">
          <h1 className="title-Toddlers">{t('home-city')}</h1>
          <div className="toddlers main-category">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
          </div>
          <p className="text">{t('home-city-description')}</p>
        </div>
      </div>
      <div className="toddlersContainer">
        <div className="content-toddlers">
        {props.toddlersState && props.toddlersState.map((toddler) => {
          return toddler.tasks.length > 0 ? (
              <ToddlersSubCategory
                key={toddler.id}
                title={toddler.title}
                imgUrl={toddler.icon}
                toddler={toddler}
              />
          ) : (
            ""
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Toddlers;
