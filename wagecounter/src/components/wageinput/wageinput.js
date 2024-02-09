// src/components/WageInput.js

function WageInput({ hourlyWage, setHourlyWage, toggleCounter }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && hourlyWage > 0) {
      toggleCounter();
    }
  };

  return (
    <div>
      <input
        type="number"
        value={hourlyWage}
        onChange={(e) => setHourlyWage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your hourly wage"
      />
      <button onClick={toggleCounter}>Start/Pause Counter</button>
    </div>
  );
}

export default WageInput;
