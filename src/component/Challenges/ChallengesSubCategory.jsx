import useStateModal from './stateModalSubCategoryGroup';

const ChallengesSubCategory = (props) => {

  const open = useStateModal((state) => state.open);
  const setSelectedData = useStateModal((state) => state.setSelectedData);

  const handleClick = () => {
    setSelectedData(props);
    open();
    // console.log("Selected category data:", data);
  };
  

  return (
    <div className="article">
      <div className="imgContainer">
        <img src={props.imgUrl} alt={props.title} fill sizes="100%"  />
      </div>
      <div className="content-challenges">
        <button type="button" className="title-challenges" onClick={handleClick}>
          <span>{props.title}</span>
        </button>
      </div>
    </div>
  );
};

export default ChallengesSubCategory;