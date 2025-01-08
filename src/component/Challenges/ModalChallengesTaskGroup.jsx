import stateModalSubCategoryGroup from "./stateModalSubCategoryGroup";
import { useBodyLock } from './useBodyLock';
import CloseBtn from '../shared/CloseBtn';
import LayoutModal from "./LayoutModal";
import ChallengesTaskGroup from './ChallengesTaskGroup';
import './ModalChallengesTaskGroup.css';

const ModalChallengesTaskGroup = () => {
  const isOpen = stateModalSubCategoryGroup((state) => state.isOpen);
  const onClose = stateModalSubCategoryGroup((state) => state.close);
  const selectedData = stateModalSubCategoryGroup((state) => state.selectedData); // Получаем выбранные данные

  useBodyLock(isOpen);

  if (!selectedData) return null;

  return (
    <LayoutModal isOpen={isOpen} handleClose={onClose}>
      <div className="wrapper">
        <div className="modal">
          <CloseBtn className="closeButton" onClick={onClose} />
          <h1 className="title">{selectedData.title}</h1>
          {selectedData.challenges && selectedData.challenges.map((task) => (
            <ChallengesTaskGroup
              key={task.id} 
              title={task.title} 
              imgUrl={task.imgUrl} 
            />
          ))}
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalChallengesTaskGroup;
