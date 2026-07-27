import React from 'react';

const EmptyState = ({ title, description, icon, actionText, onAction }) => {
  return (
    <div className="empty-state">
      {icon && <div className="empty-state-icon">{icon}</div>}
      <h2 className="empty-state-title">{title}</h2>
      {description && <p className="empty-state-description">{description}</p>}
      {actionText && onAction && (
        <button className="btn-primary" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
