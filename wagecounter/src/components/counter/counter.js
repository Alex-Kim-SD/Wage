// src/components/Counter.js
import React from 'react';

function Counter({ earnedAmount }) {
  return <h2>Earned Amount: ${earnedAmount.toFixed(5)}</h2>;
}

export default Counter;
