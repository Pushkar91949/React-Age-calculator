import React, { useState } from "react";
import "./App.css";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    if (birthDate) {
      const birthYear = new Date(birthDate).getFullYear();
      const currentYear = new Date().getFullYear();
      const calculatedAge = currentYear - birthYear;
      setAge(calculatedAge);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Age Calculator</h1>
        <input
          type="date"
          placeholder="Enter your birth date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
        {age && <p>Your age is {age} years.</p>}
      </header>
    </div>
  );
}

export default App;
