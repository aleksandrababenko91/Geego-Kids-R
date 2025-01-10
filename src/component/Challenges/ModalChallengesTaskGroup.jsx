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
      <div className="wrapper-modal">
        <div className="modal">
          <div className="closeBtn">
            <img src="/image/close_black.svg"  onClick={onClose} />
          </div>
          <h1 className="title">{selectedData.title}</h1>
          {selectedData.challenges && selectedData.challenges.map((challenge) => {
                return (
                  challenge.task_groups[0] && 
                  challenge.task_groups[0].tasks[0] && (
                    <li className="modal-card" key={challenge.id}>
                      <ChallengesTaskGroup 
                        title={challenge.title}
                        description={challenge.description}
                        //key={challenge.id}
                        imgUrl={challenge.task_groups[0].tasks[0].thumbnail}
                        challenge={challenge}
                      />
                    </li>
                  )
                );
              }
          )}
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalChallengesTaskGroup;