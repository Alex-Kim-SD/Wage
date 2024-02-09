// src/components/WageInput.js
import React from 'react';

function WageInput({ hourlyWage, setHourlyWage, startCounter }) {
  return (
    <div>
      <input
        type="number"
        value={hourlyWage}
        onChange={(e) => setHourlyWage(e.target.value)}
        placeholder="Enter your hourly wage"
      />
      <button onClick={startCounter}>Start Counter</button>
    </div>
  );
}

export default WageInput;
