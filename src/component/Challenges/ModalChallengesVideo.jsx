import React from "react";
import "./ModalChallengesVideo.css";
import stateVideoModal from "./stateVideoModal";
import { useBodyLock } from './useBodyLock'; 

import LayoutModal from "./LayoutModal";

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
        <img src="/image/close_black.svg" className="closeButton" onClick={onClose} />
          <h1 className="title-modal-video">{selectedTask.taskName}</h1>
          <video
            className="video-modal"
            src={selectedTask.taskVideo}
            controls
            autoPlay
          />
          <p className="video-modal">{selectedTask.taskDescription}</p>
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalChallengesVideo;
