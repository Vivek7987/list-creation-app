import React from 'react';

const FailureView = ({ onRetry }) => (
  <div>
    <p>Failed to load</p>
    <button onClick={onRetry}>Try Again</button>
  </div>
);

export default FailureView;
