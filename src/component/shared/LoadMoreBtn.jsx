import './MainButton.css';
import MainButton from './MainButton';

const LoadMore = ({onClick}) => {
  return(
    <MainButton
    onClick={onClick}
    className="btn_main"
    type="button"
  >
    Load more
    </MainButton>
  );
};

export default LoadMore;