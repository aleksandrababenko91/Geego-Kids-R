import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useBodyLock } from './useBodyLock';
import './LayoutModal.css';


const LayoutModal = ({ children, isOpen, handleClose }) => {
  const closeOnEscape = useCallback(
    (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeOnEscape]);

  useBodyLock(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <div className="modalOverlay">
      <div className="modaScroll">
        {children}
      </div>
    </div>, document.body
  );
};

export default LayoutModal;