// src/components/Clock.js
import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>;
}

export default Clock;
