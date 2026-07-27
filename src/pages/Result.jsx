import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  CheckCircle, XCircle, Clock, ArrowRight, RotateCcw,
  TrendingUp, Zap, Target, AlertCircle, Download
} from 'lucide-react';
import html2canvas from 'html2canvas';
import './Result.css';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const cardRef = useRef(null);

  if (!data) {
    return (
      <div className="res-page">
        <div className="res-empty">
          <AlertCircle className="res-empty-icon" />
          <h2>No Results Found</h2>
          <p>You need to complete a quiz first.</p>
          <Link to="/topics" className="res-btn res-btn-primary">Browse Topics</Link>
        </div>
      </div>
    );
  }

  const { score, total, skipped, topicName, slug, answers } = data;
  const wrong = total - score - (skipped || 0);
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const answered = answers || [];

  const totalTime = answered.reduce((sum, a) => sum + (a.timeSpent || 0), 0);
  const avgTime = answered.length > 0 ? (totalTime / answered.length).toFixed(1) : '0';
  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
  };

  const diffStats = { Easy: { correct: 0, total: 0 }, Medium: { correct: 0, total: 0 }, Hard: { correct: 0, total: 0 } };
  answered.forEach((a) => {
    const d = a.difficulty || 'Medium';
    if (diffStats[d]) {
      diffStats[d].total++;
      if (a.isCorrect) diffStats[d].correct++;
    }
  });

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (percent / 100) * circumference;

  const getMessage = () => {
    if (percent >= 90) return { text: 'Outstanding!', sub: 'You have exceptional mastery of this topic.', cls: 'res-msg-outstanding' };
    if (percent >= 70) return { text: 'Great Job!', sub: 'Solid understanding with room to polish weak areas.', cls: 'res-msg-great' };
    if (percent >= 50) return { text: 'Good Effort!', sub: 'You know the basics. Focus on the gaps to improve.', cls: 'res-msg-good' };
    if (percent >= 30) return { text: 'Keep Practicing!', sub: 'Review the fundamentals and try again.', cls: 'res-msg-keep' };
    return { text: "Don't Give Up!", sub: 'Start with the basics and build from there.', cls: 'res-msg-dont' };
  };

  const message = getMessage();

  const handleShare = async () => {
    if (!cardRef.current) return;
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: '#0f0f1a',
        useCORS: true,
        allowTaint: true,
      });
      const link = document.createElement('a');
      link.download = `technical-quiz-${slug}-result.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Download failed:', err);
      const text = `I scored ${percent}% in ${topicName} Quiz on Technical Quiz!\n${score}/${total} correct in ${formatTime(totalTime)}`;
      navigator.clipboard.writeText(text).catch(() => {});
    }
  };

  return (
    <div className="res-page">
      <div ref={cardRef} className="res-download-area">
        <div className="res-download-inner">
          <div className="res-dl-header">
            <div className="res-dl-brand">Technical Quiz</div>
            <div className="res-dl-topic">{topicName}</div>
          </div>

          <div className="res-dl-ring">
            <svg width="150" height="150" viewBox="0 0 150 150">
              <circle cx="75" cy="75" r="62" fill="none" stroke="#2a2a40" strokeWidth="8" />
              <circle
                cx="75" cy="75" r="62" fill="none"
                stroke="#3b82f6" strokeWidth="8"
                strokeDasharray={2 * Math.PI * 62}
                strokeDashoffset={2 * Math.PI * 62 - (percent / 100) * 2 * Math.PI * 62}
                strokeLinecap="round"
                transform="rotate(-90 75 75)"
              />
              <text x="75" y="68" textAnchor="middle" fill="#ffffff" fontSize="30" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">{percent}%</text>
              <text x="75" y="90" textAnchor="middle" fill="#666680" fontSize="10" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.1em">SCORE</text>
            </svg>
          </div>

          <div className="res-dl-message">{message.text}</div>
          <div className="res-dl-sub">{message.sub}</div>

          <div className="res-dl-stats">
            <div className="res-dl-stat">
              <div className="res-dl-stat-num">{total}</div>
              <div className="res-dl-stat-label">Total</div>
            </div>
            <div className="res-dl-stat res-dl-stat-green">
              <div className="res-dl-stat-num">{score}</div>
              <div className="res-dl-stat-label">Correct</div>
            </div>
            <div className="res-dl-stat res-dl-stat-red">
              <div className="res-dl-stat-num">{wrong}</div>
              <div className="res-dl-stat-label">Wrong</div>
            </div>
            <div className="res-dl-stat res-dl-stat-yellow">
              <div className="res-dl-stat-num">{skipped || 0}</div>
              <div className="res-dl-stat-label">Skipped</div>
            </div>
          </div>

          <div className="res-dl-divider" />

          <div className="res-dl-bottom">
            <div className="res-dl-bottom-item">
              <div className="res-dl-bottom-label">Completed in</div>
              <div className="res-dl-bottom-val">{formatTime(totalTime)}</div>
            </div>
            <div className="res-dl-bottom-item">
              <div className="res-dl-bottom-label">Accuracy</div>
              <div className="res-dl-bottom-val">{percent}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="res-container">
        <div className="res-card">
          <p className="res-topic">{topicName}</p>

          <div className="res-ring-wrap">
            <svg className="res-ring-svg" viewBox="0 0 120 120">
              <circle className="res-ring-bg" cx="60" cy="60" r="54" fill="none" strokeWidth="8" />
              <circle
                className="res-ring-fill"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </svg>
            <div className="res-ring-text">
              <span className="res-ring-percent">{percent}%</span>
              <span className="res-ring-label">Score</span>
            </div>
          </div>

          <p className={`res-message ${message.cls}`}>{message.text}</p>
          <p className="res-message-sub">{message.sub}</p>
        </div>

        <div className="res-stats-grid">
          <div className="res-stat-card">
            <div className="res-stat-icon-wrap res-stat-total"><Target className="res-stat-icon" /></div>
            <div className="res-stat-num">{total}</div>
            <div className="res-stat-label">Total Questions</div>
          </div>
          <div className="res-stat-card">
            <div className="res-stat-icon-wrap res-stat-correct"><CheckCircle className="res-stat-icon" /></div>
            <div className="res-stat-num">{score}</div>
            <div className="res-stat-label">Correct</div>
          </div>
          <div className="res-stat-card">
            <div className="res-stat-icon-wrap res-stat-wrong"><XCircle className="res-stat-icon" />
             </div>
            <div className="res-stat-num">{wrong}</div>
            <div className="res-stat-label">Wrong</div>
          </div>
          <div className="res-stat-card">
            <div className="res-stat-icon-wrap res-stat-skip"><Clock className="res-stat-icon" /></div>
            <div className="res-stat-num">{skipped || 0}</div>
            <div className="res-stat-label">Skipped</div>
          </div>
        </div>


        <div className="res-time-card">
          <div className="res-time-row">
            <div className="res-time-item">
              <Clock className="res-time-icon" />
              <div>
                <div className="res-time-val">{formatTime(totalTime)}</div>
                <div className="res-time-label">Total Time</div>
              </div>
            </div>
            <div className="res-time-divider" />
            <div className="res-time-item">
              <Zap className="res-time-icon" />
              <div>
                <div className="res-time-val">{avgTime}s</div>
                <div className="res-time-label">Avg. per Question</div>
              </div>
            </div>
            <div className="res-time-divider" />
            <div className="res-time-item">
              <TrendingUp className="res-time-icon" />
              <div>
                <div className="res-time-val">{percent}%</div>
                <div className="res-time-label">Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="res-diff-card">
          <h3 className="res-diff-title">Performance by Difficulty</h3>
          <div className="res-diff-grid">
            {['Easy', 'Medium', 'Hard'].map((diff) => {
              const s = diffStats[diff];
              const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
              const barColor = diff === 'Easy' ? 'var(--success)' : diff === 'Medium' ? 'var(--warning)' : 'var(--error)';
              return (
                <div key={diff} className="res-diff-item">
                  <div className="res-diff-header">
                    <div className="res-diff-label-row">
                      <span className={`res-diff-dot res-diff-${diff.toLowerCase()}`} />
                      <span className="res-diff-name">{diff}</span>
                    </div>
                    <span className="res-diff-score">{s.correct}/{s.total}</span>
                  </div>
                  <div className="res-diff-bar-track">
                    <div className="res-diff-bar-fill" style={{ width: `${pct}%`, background: barColor }} />
                  </div>
                  <div className="res-diff-pct">{pct}%</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="res-actions">
          <button className="res-btn res-btn-outline" onClick={() => navigate(`/quiz/${slug}`)}>
            <RotateCcw className="res-btn-icon" />
            Retry
          </button>
          <button className="res-btn res-btn-share" onClick={handleShare}>
            <Download className="res-btn-icon" />
            Download Result
          </button>
          <Link to="/topics" className="res-btn res-btn-primary">
            Browse Topics
            <ArrowRight className="res-btn-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Result;