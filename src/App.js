import React from 'react';
import './App.css'
import MoneyForm from './components/money-form/money-form';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>ATM Money Dispenser </h1>
      </div>
      <MoneyForm />
    </div>
  );
}

export default App;
