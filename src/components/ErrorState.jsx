import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const ErrorState = ({ title, description, onRetry, retryText = 'Try Again' }) => {
  return (
    <div className="error-state">
      <FiAlertTriangle size={48} className="error-icon" />
      <h2 className="error-title">{title}</h2>
      {description && <p className="error-description">{description}</p>}
      {onRetry && (
        <button className="btn-primary" onClick={onRetry}>
          {retryText}
        </button>
      )}
    </div>
  );
};

export default ErrorState;
