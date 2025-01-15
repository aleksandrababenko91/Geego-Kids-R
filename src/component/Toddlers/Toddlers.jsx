import React, { useState } from "react";
import ToddlersSubCategory from './ToddlersSubCategory';
import './Toddlers.css';
import { useTranslation } from 'react-i18next';
import InputSearch from '../shared/InputSearch';  
import LoadMore from '../shared/LoadMoreBtn';  

const Toddlers = (props) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(1); 

  const toddlersState = props.toddlersState || []; //  checking if massive is endefined

  const filteredToddlers = searchQuery
    ? toddlersState.filter(toddler =>
        toddler.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : toddlersState;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4); 
  };

  return (
    <div className="section-toddlers">
      <div className="wrapper-toddlers">
        <div className="headerContainer">
          <div className="titleDots">
            <h1 className="title-toddlers">{t('home-school')}</h1>
            <div className="toddlers main-category">
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
            </div>
          </div>
          <p className="text">{t('home-school-description')}</p>
        </div>
      </div>
      <div className="toddlersContainer">
        <InputSearch 
          value={searchQuery} 
          onChange={handleSearchChange} 
          placeholder={t('hakusana')}  
        />
        <div className="content-toddlers">
          {filteredToddlers.slice(0, visibleCount).map((toddler) => {
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
        {visibleCount < filteredToddlers.length && (
          <LoadMore onClick={handleLoadMore} />
        )}
      </div>
    </div>
  );
};

export default Toddlers;
