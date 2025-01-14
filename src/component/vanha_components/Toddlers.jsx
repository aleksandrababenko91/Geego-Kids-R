import React from "react";
import { useTranslation } from 'react-i18next';
import ToddlersSubCategory from "./ToddlersSubCategory";
import "./Toddlers.css";
import "../index.css";

const Toddlers = (props) => {

  const { t } = useTranslation();

  return (
    <div className="Toddlers main-category">
      <h2>
        {t('home-school')}
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </h2>
      <p>
        {t('home-school-description')}
      </p>
      <div className="sub-categrory-group">
        {props.toddlersState && props.toddlersState.map((toddler) => {
          return toddler.tasks.length > 0 ? (
            <div className="sub-category" key={toddler.id}>
              <ToddlersSubCategory
                title={toddler.title}
                imgUrl={toddler.icon}
                //
                toddler={toddler}
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

export default Toddlers;
