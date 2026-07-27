import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader2, Clock, CheckCircle, XCircle, ArrowRight, Square, Lightbulb } from 'lucide-react';
import { loadQuestions } from '../utils/dataLoader';
import './Quiz.css';

const topicDisplayNames = {
  aiml: 'AI & Machine Learning',
  c: 'C Programming',
  cn: 'Computer Networks',
  cpp: 'C++ Programming',
  dbms: 'Database Management Systems',
  dsa: 'Data Structures & Algorithms',
  fullStack: 'Full Stack Development',
  java: 'Java Programming',
  oops: 'Object-Oriented Programming',
  os: 'Operating Systems',
  placement_fundamentals: 'Placement Fundamentals',
  python: 'Python Programming',
  software_engineering: 'Software Engineering',
  sql: 'SQL',
};

const TIMER_DURATION = 30;

function Quiz() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const questionStartRef = useRef(Date.now());

  const [phase, setPhase] = useState('loading');
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedCount, setSelectedCount] = useState(10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [timer, setTimer] = useState(TIMER_DURATION);
  const [answers, setAnswers] = useState([]);
  const [showEndConfirm, setShowEndConfirm] = useState(false);

  const topicName = topicDisplayNames[slug] || slug;

  useEffect(() => {
    const load = async () => {
      try {
        const data = await loadQuestions(slug);
        if (data.length > 0) {
          setAllQuestions(data);
          setPhase('setup');
        } else {
          setPhase('error');
        }
      } catch (err) {
        console.error('QUIZ LOAD ERROR:', err);
        setPhase('error');
      }
    };
    setPhase('loading');
    load();
  }, [slug]);

  const getCorrectAnswer = useCallback((q) => {
    if (typeof q.answer === 'number') return q.answer;
    if (typeof q.answer === 'string') {
      const idx = q.options?.findIndex(
        (o) => o.toLowerCase().trim() === q.answer.toLowerCase().trim()
      );
      if (idx !== -1) return idx;
      const num = parseInt(q.answer, 10);
      if (!isNaN(num) && num >= 0 && num < (q.options?.length || 0)) return num;
    }
    if (typeof q.correct === 'number') return q.correct;
    if (typeof q.correct === 'string') {
      const idx = q.options?.findIndex(
        (o) => o.toLowerCase().trim() === q.correct.toLowerCase().trim()
      );
      if (idx !== -1) return idx;
    }
    if (typeof q.correctAnswer === 'number') return q.correctAnswer;
    if (typeof q.correctAnswer === 'string') {
      const idx = q.options?.findIndex(
        (o) => o.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim()
      );
      if (idx !== -1) return idx;
    }
    return 0;
  }, []);

  /**
   * Takes a question object, returns a NEW object with options shuffled
   * and answer index updated to match the new position.
   * The original question is never modified.
   */
  const shuffleOptionsForQuestion = useCallback((question) => {
    const options = question.options;
    if (!options || options.length <= 1) return { ...question };

    // Step 1: Figure out which text is the correct answer
    const originalCorrectIdx = getCorrectAnswer(question);
    const correctText = options[originalCorrectIdx];

    // Step 2: Copy the options array
    const shuffled = [...options];

    // Step 3: Fisher-Yates shuffle (proper uniform shuffle)
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Step 4: Find where the correct answer ended up
    const newCorrectIdx = shuffled.indexOf(correctText);

    // Step 5: Return a fresh object — original is untouched
    return {
      ...question,
      options: shuffled,
      answer: newCorrectIdx,
    };
  }, [getCorrectAnswer]);

  const startQuiz = () => {
    const count = selectedCount === 0 ? allQuestions.length : Math.min(selectedCount, allQuestions.length);

    // Pick random questions
    const picked = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, count);

    // Shuffle options for each picked question (creates copies, original data untouched)
    const processed = picked.map((q) => shuffleOptionsForQuestion(q));

    setQuestions(processed);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setSkipped(0);
    setTimer(TIMER_DURATION);
    setAnswers([]);
    setPhase('quiz');
    questionStartRef.current = Date.now();
  };

  useEffect(() => {
    if (phase !== 'quiz' || isAnswered) return;
    if (timer <= 0) {
      handleTimeout();
      return;
    }
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [phase, timer, isAnswered]);

  const recordAnswer = useCallback((selected, timedOut) => {
    const timeSpent = Math.round((Date.now() - questionStartRef.current) / 1000);
    const q = questions[currentIndex];
    const correctIdx = getCorrectAnswer(q);
    const isCorrect = selected === correctIdx;
    if (isCorrect && !timedOut) setScore((s) => s + 1);
    if (timedOut) setSkipped((s) => s + 1);
    setAnswers((prev) => [
      ...prev,
      {
        question: q,
        selected,
        correct: correctIdx,
        isCorrect,
        timedOut,
        timeSpent,
        difficulty: q.difficulty || 'Medium',
      },
    ]);
  }, [questions, currentIndex, getCorrectAnswer]);

  const handleTimeout = () => {
    setIsAnswered(true);
    recordAnswer(null, true);
  };

  const handleSelect = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    recordAnswer(index, false);
  };

  const goToResults = () => {
    navigate('/result', {
      state: {
        score,
        total: questions.length,
        skipped,
        topicName,
        slug,
        answers,
      },
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimer(TIMER_DURATION);
      questionStartRef.current = Date.now();
    } else {
      goToResults();
    }
  };

  const handleEndQuiz = () => {
    setShowEndConfirm(false);
    goToResults();
  };

  const progressPercent = questions.length > 0
    ? ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100
    : 0;

  const currentQ = questions[currentIndex];
  const correctIdx = currentQ ? getCorrectAnswer(currentQ) : 0;

  const getDifficultyClass = (d) => {
    const lower = (d || '').toLowerCase();
    if (lower === 'easy') return 'quiz-diff-easy';
    if (lower === 'hard') return 'quiz-diff-hard';
    return 'quiz-diff-medium';
  };

  if (phase === 'loading') {
    return (
      <div className="quiz-page">
        <div className="quiz-loading">
          <Loader2 className="quiz-spinner" />
          <p>Loading {topicName} questions...</p>
        </div>
      </div>
    );
  }

  if (phase === 'error') {
    return (
      <div className="quiz-page">
        <div className="quiz-error-box">
          <h2>Topic Not Found</h2>
          <p>Could not load questions for "{slug}". It may not exist or the data file is corrupted.</p>
          <button className="quiz-btn quiz-btn-primary" onClick={() => navigate('/topics')}>
            Back to Topics
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'setup') {
    const counts = [10, 20, 30, 50];
    return (
      <div className="quiz-page">
        <div className="quiz-setup">
          <h1 className="quiz-setup-title">{topicName}</h1>
          <p className="quiz-setup-info">
            {allQuestions.length} questions available
          </p>
          <div className="quiz-setup-section">
            <label className="quiz-setup-label">Number of Questions</label>
            <div className="quiz-count-options">
              {counts.map((count) => (
                <button
                  key={count}
                  className={`quiz-count-btn ${selectedCount === count ? 'quiz-count-btn-active' : ''}`}
                  onClick={() => setSelectedCount(count)}
                  disabled={count > allQuestions.length}
                >
                  {count}
                </button>
              ))}
              <button
                className={`quiz-count-btn ${selectedCount === 0 ? 'quiz-count-btn-active' : ''}`}
                onClick={() => setSelectedCount(0)}
              >
                All ({allQuestions.length})
              </button>
            </div>
          </div>
          <div className="quiz-setup-section">
            <div className="quiz-setup-detail">
              <Clock className="quiz-setup-detail-icon" />
              <span>{TIMER_DURATION} seconds per question</span>
            </div>
            <div className="quiz-setup-detail">
              <CheckCircle className="quiz-setup-detail-icon" />
              <span>Instant answer feedback with explanations</span>
            </div>
            <div className="quiz-setup-detail">
              <ArrowRight className="quiz-setup-detail-icon" />
              <span>No going back to previous questions</span>
            </div>
          </div>
          <button className="quiz-btn quiz-btn-primary quiz-btn-large" onClick={startQuiz}>
            Start Quiz
          </button>
          <button className="quiz-btn quiz-btn-ghost" onClick={() => navigate('/topics')}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'quiz' && currentQ) {
    const options = currentQ.options || [];
    const timerColor = timer <= 5 ? 'quiz-timer-danger' : timer <= 10 ? 'quiz-timer-warning' : 'quiz-timer-normal';
    const timerWidth = (timer / TIMER_DURATION) * 100;
    const explanation = currentQ.explanation;

    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="quiz-top-bar">
            <div className="quiz-top-left">
              <span className="quiz-topic-label">{topicName}</span>
              <span className={`quiz-diff-dot ${getDifficultyClass(currentQ.difficulty)}`} title={currentQ.difficulty || 'Medium'} />
            </div>
            <div className="quiz-top-right">
              <div className="quiz-timer-wrap">
                <Clock className={`quiz-timer-icon ${timerColor}`} />
                <span className={`quiz-timer-text ${timerColor}`}>{timer}s</span>
                <div className="quiz-timer-track">
                  <div
                    className={`quiz-timer-fill ${timerColor}`}
                    style={{ width: `${timerWidth}%` }}
                  />
                </div>
              </div>
              <button
                className="quiz-end-btn"
                onClick={() => setShowEndConfirm(true)}
                title="End Quiz"
              >
                <Square className="quiz-end-icon" />
                <span>End</span>
              </button>
            </div>
          </div>

          {showEndConfirm && (
            <div className="quiz-end-confirm">
              <p>End quiz and view results for {answers.length} answered question{answers.length !== 1 ? 's' : ''}?</p>
              <div className="quiz-end-confirm-actions">
                <button className="quiz-btn quiz-btn-ghost-sm" onClick={() => setShowEndConfirm(false)}>
                  Cancel
                </button>
                <button className="quiz-btn quiz-btn-danger" onClick={handleEndQuiz}>
                  End Quiz
                </button>
              </div>
            </div>
          )}

          <div className="quiz-progress-track">
            <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
          <div className="quiz-progress-text">
            Question {currentIndex + 1} of {questions.length}
          </div>

          <div className="quiz-question-card">
            <h2 className="quiz-question-text">{currentQ.question}</h2>
          </div>

          <div className="quiz-options-grid">
            {options.map((option, idx) => {
              let optClass = 'quiz-option';
              if (isAnswered) {
                if (idx === correctIdx) optClass += ' quiz-option-correct';
                else if (idx === selectedOption && idx !== correctIdx) optClass += ' quiz-option-wrong';
                else optClass += ' quiz-option-dimmed';
              }
              return (
                <button key={idx} className={optClass} onClick={() => handleSelect(idx)} disabled={isAnswered}>
                  <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="quiz-option-text">{option}</span>
                  {isAnswered && idx === correctIdx && <CheckCircle className="quiz-option-icon quiz-option-icon-correct" />}
                  {isAnswered && idx === selectedOption && idx !== correctIdx && <XCircle className="quiz-option-icon quiz-option-icon-wrong" />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="quiz-feedback-area">
              <div className="quiz-feedback">
                {selectedOption === null ? (
                  <p className="quiz-feedback-msg quiz-feedback-timeout">
                    Time's up! The correct answer is highlighted above.
                  </p>
                ) : selectedOption === correctIdx ? (
                  <p className="quiz-feedback-msg quiz-feedback-correct">Correct!</p>
                ) : (
                  <p className="quiz-feedback-msg quiz-feedback-wrong">Incorrect. The correct answer is highlighted above.</p>
                )}
                <button className="quiz-btn quiz-btn-primary" onClick={handleNext}>
                  {currentIndex === questions.length - 1 ? 'View Results' : 'Next Question'}
                  <ArrowRight className="quiz-btn-icon" />
                </button>
              </div>
              {explanation && (
                <div className="quiz-explanation">
                  <Lightbulb className="quiz-explanation-icon" />
                  <p>{explanation}</p>
                </div>
              )}
            </div>
          )}

          <div className="quiz-score-bar">
            <div className="quiz-score-item">
              <CheckCircle className="quiz-score-icon-correct" />
              <span>{score}</span>
            </div>
            <div className="quiz-score-item">
              <XCircle className="quiz-score-icon-wrong" />
              <span>{currentIndex + 1 - score - (isAnswered && selectedOption === null ? 1 : 0)}</span>
            </div>
            <div className="quiz-score-item">
              <Clock className="quiz-score-icon-skip" />
              <span>{skipped}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Quiz;