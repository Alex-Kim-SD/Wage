// src/components/counter/counter.js
function Counter({ earnedAmount }) {
  return <h2>Earned Amount: ${earnedAmount.toFixed(5)}</h2>;
}

export default Counter
