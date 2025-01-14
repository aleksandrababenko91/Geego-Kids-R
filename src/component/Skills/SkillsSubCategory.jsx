// import useStateModal from './stateModalSubCategoryGroup';
// import './SkillsSubCategory.css';

// const SkillsSubCategory = (props) => {

//   const open = useStateModal((state) => state.open);
//   const setSelectedData = useStateModal((state) => state.setSelectedData);

//   const handleClick = () => {
//     setSelectedData(props);
//     open();
//   };
  


//   return (
//     <div className="container-card">
//       <div className="imgContainer">
//         <img src={props.imgUrl} alt={props.title} fill sizes="100%"  />
//       </div>
//       <div className="content">
//         <button  className="title-card" onClick={handleClick}>
//           <span >{props.title}</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SkillsSubCategory;

import React from "react";
import stateModalSubCategoryGroup from "./stateModalSubCategoryGroup";
import "./SkillsSubCategory.css";

const SkillsSubCategory = (props) => {
  const open = stateModalSubCategoryGroup((state) => state.open);
  const setSelectedData = stateModalSubCategoryGroup((state) => state.setSelectedData);

  const handleClick = () => {
    setSelectedData(props); // Передача данных в модальное окно
    open(); // Открытие модального окна
  };

  return (
    <div className="container-card">
      <div className="imgContainer">
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <div className="content">
        <button className="title-card" onClick={handleClick}>
          <span>{props.title}</span>
        </button>
      </div>
    </div>
  );
};

export default SkillsSubCategory;
