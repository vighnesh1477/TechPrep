import React from 'react';

const ShareButton = ({ text, url }) => {
  const handleShare = () => {
    const shareText = `${text} ${url}`;
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Copied to clipboard!');
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Copied to clipboard!');
    });
  };

  return (
    <button className="btn-outline" onClick={handleShare}>
      <span>Share</span>
    </button>
  );
};

export default ShareButton;
