import React from "react";
import stateModalSubCategoryGroup from "./stateModalSubCategoryGroup";
import { useBodyLock } from "../shared/useBodyLock";
import LayoutModal from "../shared/LayoutModal";
import SkillsTaskGroup from "./SkillsTaskGroup";
import "./ModalSkillsTaskGroup.css";

const ModalSkillsTaskGroup = () => {
  const isOpen = stateModalSubCategoryGroup((state) => state.isOpen);
  const onClose = stateModalSubCategoryGroup((state) => state.close);
  const selectedData = stateModalSubCategoryGroup((state) => state.selectedData);

  useBodyLock(isOpen); 

  if (!selectedData) return null; 

  return (
    <LayoutModal isOpen={isOpen} handleClose={onClose}>
      <div className="wrapper-modal">
        <div className="modal">
          <div className="closeBtn">
            <img src="/image/close_black.svg" onClick={onClose} alt="Close" />
          </div>
          <h1 className="title">{selectedData.title}</h1>
          {selectedData.sportschools &&
            selectedData.sportschools.map((school) => (
              <li className="modal-card" key={school.id}>
                <SkillsTaskGroup
                  title={school.title}
                  description={school.description}
                  imgUrl={school.icon}
                />
              </li>
            ))}
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalSkillsTaskGroup;
