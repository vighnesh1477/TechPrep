import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="back-button"
      onClick={() => navigate(-1)}
      aria-label="Go back"
    >
      <FiArrowLeft size={20} />
      Back
    </button>
  );
};

export default BackButton;
