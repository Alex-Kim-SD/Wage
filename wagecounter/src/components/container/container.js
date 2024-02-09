// src/components/container/Container.js
import React, { useState, useEffect } from 'react';
import Clock from '../clock/clock.js';
import WageInput from '../wageinput/wageinput.js';
import Counter from '../counter/counter.js';

import './container.css'; // If you have specific styles for the container


function Container() {
    const [hourlyWage, setHourlyWage] = useState(0);
    const [earnedAmount, setEarnedAmount] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [isCounterRunning, setIsCounterRunning] = useState(false);


    const startCounter = () => {
        if (hourlyWage > 0) {
            setStartTime(new Date());
        }
    };
    const toggleCounter = () => {
        if (hourlyWage > 0) {
            setIsCounterRunning(!isCounterRunning);
            if (!isCounterRunning) {
                setStartTime(new Date());
            }
        }
    };

    useEffect(() => {
        let interval;
        if (isCounterRunning) {
            interval = setInterval(() => {
                const secondsPassed = (new Date() - startTime) / 1000;
                setEarnedAmount((secondsPassed / 3600) * hourlyWage);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isCounterRunning, startTime, hourlyWage]);



    return <div className="container">
        <Clock />
        <WageInput hourlyWage={hourlyWage} setHourlyWage={setHourlyWage} startCounter={startCounter} toggleCounter={toggleCounter}/>
        <Counter earnedAmount={earnedAmount} />
    </div>;
}

export default Container;
