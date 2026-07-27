import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children, title }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-dialog" role="dialog" aria-modal="true">
        <div className="modal-content">
          {title && (
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
              <button 
                className="modal-close" 
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
          )}
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
