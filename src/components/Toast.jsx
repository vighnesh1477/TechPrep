import React, { useState, useEffect } from 'react';

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    const newToast = {
      id,
      message,
      type,
      timestamp: Date.now()
    };
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };

  // Remove old toasts
  useEffect(() => {
    const now = Date.now();
    setToasts(prev => prev.filter(t => now - t.timestamp < 10000)); // Keep for 10 seconds max
  }, []);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className={`toast toast-${toast.type}`}
          role="alert"
          aria-live="polite"
        >
          <div className="toast-content">{toast.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
