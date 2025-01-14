import React from "react";
import "./ModalSkillsVideo.css";
import stateVideoModal from "./stateVideoModal";
import { useBodyLock } from '../shared/useBodyLock'; 
import LayoutModal from "../shared/LayoutModal";

const ModalSkillsVideo = () => {
  const isOpen = stateVideoModal((state) => state.isOpen);
  const onClose = stateVideoModal((state) => state.close);
  const selectedTask = stateVideoModal((state) => state.selectedTask);

  useBodyLock(isOpen);

  if (!selectedTask || !selectedTask.taskVideo) return null;

  return (
    <LayoutModal isOpen={isOpen} handleClose={onClose}>
      <div className="wrapper-modal-video">
        <div className="modal-video">
          <div className="inRow">
          <div class="info-container">
            <div class="info-icon">
              <h1 className="title-modal-video">{selectedTask.taskName}</h1>
              <i class="fas fa-info-circle"></i> 
            </div>
            <div class="info-alert">
              <p>{selectedTask.taskDescription}</p>
            </div>
          </div>
          <img src="/image/close_black.svg" className="closeButton" onClick={onClose} />
          </div>
          <video
            className="video-modal"
            src={selectedTask.taskVideo}
            controls
            autoPlay
          />
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalSkillsVideo;