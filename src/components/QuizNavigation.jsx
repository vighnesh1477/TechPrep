import React from 'react';

const QuizNavigation = ({ onNext, isLastQuestion }) => {
  return (
    <div className="quiz-navigation">
      <button 
        className="btn-primary" 
        onClick={onNext}
      >
        {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

export default QuizNavigation;
