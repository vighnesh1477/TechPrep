import React from 'react';

const Bookmarks = () => {
  // In a real app, this would come from context or state
  const bookmarkedQuestions = []; // Placeholder
  
  return (
    <div className="bookmarks-page">
      <header className="page-header">
        <h1>Bookmarked Questions</h1>
      </header>
      
      <main className="bookmarks-content">
        {bookmarkedQuestions.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🔖</div>
            <h2 className="empty-state-title">No Bookmarked Questions</h2>
            <p className="empty-state-description">
              Bookmark questions while taking quizzes to see them here.
            </p>
            <button className="btn-primary">
              Browse Topics
            </button>
          </div>
        ) : (
          <div className="bookmarks-grid">
            {bookmarkedQuestions.map((question, index) => (
              <div key={index} className="bookmark-card">
                <div className="bookmark-question">
                  <p>{question.question}</p>
                </div>
                <div className="bookmark-actions">
                  <button className="btn-outline">Remove Bookmark</button>
                  <button className="btn-primary">View in Quiz</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Bookmarks;
