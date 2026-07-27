import React from 'react';

const TopicGrid = ({ topics }) => {
  return (
    <div className="topic-grid">
      {topics.map((topic, index) => (
        <TopicCard
          key={topic.key || index}
          {...topic}
        />
      ))}
    </div>
  );
};

export default TopicGrid;
