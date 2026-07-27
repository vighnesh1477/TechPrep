import React from 'react';

const QuizOptions = ({ options, selectedAnswer, showAnswer, correctAnswer, onSelectAnswer }) => {
  const isSelected = (index) => selectedAnswer === index;
  const isCorrect = (index) => index === correctAnswer;
  const isIncorrect = (index) => isSelected(index) && !isCorrect(index) && showAnswer;

  const getOptionLabel = (index) => {
    return String.fromCharCode(65 + index); // A, B, C, D
  };

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <button
          key={index}
          className={`option-btn ${isSelected(index) ? 'selected' : ''} 
                     ${isCorrect(index) && showAnswer ? 'correct' : ''}
                     ${isIncorrect(index) ? 'incorrect' : ''}
                     ${!showAnswer && !isSelected(index) ? 'hoverable' : ''}`}
          onClick={!showAnswer ? () => onSelectAnswer(index) : null}
          disabled={showAnswer}
        >
          <div className="option-label">{getOptionLabel(index)}</div>
          <div className="option-text">{option}</div>
          {showAnswer && isCorrect(index) && (
            <div className="option-indicator correct">✓</div>
          )}
          {showAnswer && isIncorrect(index) && (
            <div className="option-indicator incorrect">✗</div>
          )}
        </button>
      ))}
    </div>
  );
};

export default QuizOptions;
