import React from "react";
import "./ModalSkillsVideo.css";
import stateVideoModal from "./stateVideoModal";
import { useBodyLock } from '../shared/useBodyLock'; 
import LayoutModal from "../shared/LayoutModal";

const ModalSkillsVideo = () => {


  const isOpen = stateVideoModal((state) => state.isOpen);
  const onClose = stateVideoModal((state) => state.close);
  const selectedTaskIndex = stateVideoModal((state) => state.selectedTaskIndex);
  const tasksWithVideos = stateVideoModal((state) => state.tasksWithVideos);
  const next = stateVideoModal((state) => state.next);
  const prev = stateVideoModal((state) => state.prev);

  useBodyLock(isOpen);
  if (!tasksWithVideos.length || selectedTaskIndex === null) return null;
  
  const selectedTask = tasksWithVideos[selectedTaskIndex];
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
          <img src="/image/close_black.svg"  alt="close black btn" className="closeButton" onClick={onClose} />
          </div>
          <div className="videoCarousel">
            <div onClick={prev} >
              <img src="/image/arrow-back.svg" alt="Arrow Icon" className="arrowCarousel" />
            </div>
            <video
              className="video-modal"
              src={selectedTask.taskVideo}
              controls
              autoPlay
            />
            <div onClick={next} >
              <img src="/image/arrow.svg" alt="Arrow Icon" className="arrowCarousel" />
            </div>
          </div>
        </div>
      </div>
    </LayoutModal>
  );
};

export default ModalSkillsVideo;