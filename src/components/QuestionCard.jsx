import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const QuestionCard = ({ question, options, selectedAnswer, correctAnswer, onAnswerSelect, showAnswer }) => {
  const isAnswered = selectedAnswer !== null && selectedAnswer !== undefined;
  const isCorrect = isAnswered && selectedAnswer === correctAnswer;
  const isRevealed = isAnswered || showAnswer;

  const handleOptionSelect = (index) => {
    if (!isRevealed) {
      onAnswerSelect(index);
    }
  };

  const getOptionClass = (index) => {
    let cls = 'option-button';

    if (isRevealed) {
      if (index === correctAnswer) {
        cls += ' correct';
      } else if (isAnswered && index === selectedAnswer && index !== correctAnswer) {
        cls += ' incorrect';
      }
    }

    return cls;
  };

  const getOptionIcon = (index) => {
    if (isRevealed) {
      if (index === correctAnswer) {
        return (
          <span className="option-icon correct">
            <CheckCircle size={18} />
          </span>
        );
      }
      if (isAnswered && index === selectedAnswer && index !== correctAnswer) {
        return (
          <span className="option-icon incorrect">
            <XCircle size={18} />
          </span>
        );
      }
    }

    return <span className="option-icon">{String.fromCharCode(65 + index)}</span>;
  };

  const getResultMessage = () => {
    if (!isRevealed) return null;

    if (isAnswered) {
      return (
        <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
          <span className={`result-icon ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
          </span>
          <span>{isCorrect ? 'Correct!' : 'Incorrect'}</span>
        </div>
      );
    }

    if (showAnswer) {
      return (
        <div className="result-message correct">
          <span className="result-icon correct">
            <CheckCircle size={18} />
          </span>
          <span>Correct Answer: {options[correctAnswer]}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{question}</h2>
        {getResultMessage()}
      </div>

      <div className="card-body" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            disabled={isRevealed}
            className={getOptionClass(index)}
          >
            {getOptionIcon(index)}
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>

      {!isRevealed && (
        <div className="card-footer">
          <button
            onClick={() => onAnswerSelect(null)}
            className="btn btn-outline"
          >
            Skip Question
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;