import React from "react";
import "./ModalChallengesVideo.css";
import stateVideoModal from "./stateVideoModal";
import { useBodyLock } from '../shared/useBodyLock'; 
import LayoutModal from "../shared/LayoutModal";

const ModalChallengesVideo = () => {
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
          <div className="info-container">
            <div className="info-icon">
              <h1 className="title-modal-video">{selectedTask.taskName}</h1>
              <img src="/image/info-thin.svg" alt="info sign" width={20} height={20} />
            </div>
            <div className="info-alert">
              <p>{selectedTask.taskDescription}</p>
            </div>
          </div>
          <img src="/image/close_black.svg" alt="black close btn" className="closeButton" onClick={onClose} />
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

export default ModalChallengesVideo;