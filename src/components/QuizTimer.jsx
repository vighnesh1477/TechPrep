import React from 'react';
import { FiTimer } from 'react-icons/fi';

const QuizTimer = ({ timeLeft, onTimeUp, isActive }) => {
  const getTimeColor = () => {
    if (timeLeft <= 5) return 'text-error';
    if (timeLeft <= 10) return 'text-warning';
    return 'text-secondary';
  };

  const getTimeText = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <FiTimer size={20} className="timer-icon" />
      <div className={`timer-text ${getTimeColor()}`}>
        {getTimeText()}
      </div>
    </div>
  );
};

export default QuizTimer;
