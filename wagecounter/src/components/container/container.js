// src/components/container/Container.js
import React, { useState, useEffect } from 'react';
import Clock from '../clock/clock.js';
import WageInput from '../wageinput/wageinput.js';
import Counter from '../counter/counter.js';
import Total from '../total/total.js';
import './container.css';

function Container() {
    const [hourlyWage, setHourlyWage] = useState(0);
    const [earnedAmount, setEarnedAmount] = useState(0);
    const [totalEarned, setTotalEarned] = useState(0);
    const [runningTime, setRunningTime] = useState(0); // New state to track running time
    const [startTime, setStartTime] = useState(null);
    const [isCounterRunning, setIsCounterRunning] = useState(false);

    const toggleCounter = () => {
        if (hourlyWage > 0) {
            if (!isCounterRunning) {
                setStartTime(new Date());
            } else {
                setRunningTime(runningTime + ((new Date()) - startTime)); // Update running time
            }
            setIsCounterRunning(!isCounterRunning);
        }
    };

    const saveEarnings = () => {
        setIsCounterRunning(false);
        setTotalEarned(prevTotal => prevTotal + earnedAmount);
        setEarnedAmount(0);
        setRunningTime(0); // Reset running time when saving earnings
    };

    useEffect(() => {
        let interval;
        if (isCounterRunning) {
            interval = setInterval(() => {
                const totalRunningSeconds = runningTime / 1000 + ((new Date()) - startTime) / 1000;
                setEarnedAmount((totalRunningSeconds / 3600) * hourlyWage);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isCounterRunning, startTime, hourlyWage, runningTime]);

    return (
        <div className="container">
            <Clock />
            <WageInput hourlyWage={hourlyWage} setHourlyWage={setHourlyWage} toggleCounter={toggleCounter} />
            <Counter earnedAmount={earnedAmount} />
            <button onClick={saveEarnings}>Save Earnings</button>
            <Total totalEarned={totalEarned} />
        </div>
    );
}

export default Container;
