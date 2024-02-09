// App.js
import React, { useState, useEffect } from 'react';
import Clock from './components/clock/clock.js';
import WageInput from './components/wageinput/wageinput.js';
import Counter from './components/counter/counter.js';
import './App.css'

function App() {
  const [hourlyWage, setHourlyWage] = useState(0);
  const [earnedAmount, setEarnedAmount] = useState(0);
  const [startTime, setStartTime] = useState(null);

  const startCounter = () => {
    if (hourlyWage > 0) {
      setStartTime(new Date());
    }
  };

  useEffect(() => {
    let interval;
    if (startTime) {
      interval = setInterval(() => {
        const secondsPassed = (new Date() - startTime) / 1000;
        setEarnedAmount((secondsPassed / 3600) * hourlyWage);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [startTime, hourlyWage]);

  return (
    <div>
      <Clock />
      <WageInput hourlyWage={hourlyWage} setHourlyWage={setHourlyWage} startCounter={startCounter} />
      <Counter earnedAmount={earnedAmount} />
    </div>
  );
}

export default App;
