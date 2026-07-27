import { X, Zap, Target, BookOpen } from 'lucide-react';
import './HelpModal.css';

function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="hm-overlay" onClick={onClose}>
      <div className="hm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="hm-close" onClick={onClose} aria-label="Close help">
          <X />
        </button>

        <h2 className="hm-title">Why Technical Quiz?</h2>
        <p className="hm-subtitle">
          A focused platform designed to help you prepare smarter, not harder.
        </p>

        <div className="hm-grid">
          <div className="hm-card">
            <div className="hm-icon">
              <Zap />
            </div>
            <h3>Instant Feedback</h3>
            <p>
              See correct and incorrect answers immediately after each question.
              Learn as you go.
            </p>
          </div>

          <div className="hm-card">
            <div className="hm-icon">
              <Target />
            </div>
            <h3>Interview Ready</h3>
            <p>
              Questions curated to match real technical interview patterns across
              top companies.
            </p>
          </div>

          <div className="hm-card">
            <div className="hm-icon">
              <BookOpen />
            </div>
            <h3>14 Core Subjects</h3>
            <p>
              From DSA to AI/ML, from C to Full Stack — all the topics you need
              in one place.
            </p>
          </div>
        </div>

        <div className="hm-footer">
          <button className="hm-btn" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;