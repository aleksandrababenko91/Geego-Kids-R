import useStateModal from './stateModalSubCategoryGroup';
import './ChallengesSubCategory.css';

const ChallengesSubCategory = (props) => {

  const open = useStateModal((state) => state.open);
  const setSelectedData = useStateModal((state) => state.setSelectedData);

  const handleClick = () => {
    setSelectedData(props);
    open();
  };
  

  return (
    <div className="container-card">
      <button  className="title-card" onClick={handleClick}>
        <div className="imgContainer">
          <img src={props.imgUrl} alt={props.title}   />
        </div>
        <div className="content">
          <span>{props.title}</span>
        </div>
        </button>
    </div>
  );
};

export default ChallengesSubCategory;