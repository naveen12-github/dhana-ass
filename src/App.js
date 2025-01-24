import React, { useState } from 'react';
import './index.css'; // CSS file for styling

function App() {
  const [loanAmount, setLoanAmount] = useState(14500000); // Default loan amount
  const [loanPeriod, setLoanPeriod] = useState(12); // Default loan period

  return (
    <div className="loan-calculator">
      {/* Header */}
      <div className="header">
        <span className="icon">&#8592;</span> {/* Left arrow icon */}
        <h1>Loan Calculator</h1>
        <span className="icon">&#8942;</span> {/* Three vertical dots */}
      </div>

      {/* Maximum Funding Section */}
      <div className="funding-container">
        <p className="funding-title">Maximum Funding</p>
        <h2 className="funding-amount">Rp 17.484.500</h2>
        <div className="funding-details">
          <p>Honda ADV 150 CBS</p>
          <span className="filter-icon">&#9881;</span> {/* Filter icon */}
        </div>
      </div>

      {/* Loan Amount Section */}
      <div className="slider-container">
        <p>Loan Amount</p>
        <h2>Rp {loanAmount.toLocaleString()}</h2>
        <input
          type="range"
          min="1000000"
          max="17485000"
          step="100000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <div className="slider-values">
          <span>1,000,000</span>
          <span>17,480,000</span>
        </div>
      </div>

      {/* Loan Period Section */}
      <div className="slider-container">
        <p>Loan Period</p>
        <h2>{loanPeriod} Months</h2>
        <input
          type="range"
          min="6"
          max="18"
          step="1"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
        />
        <div className="slider-values">
          <span>6 Months</span>
          <span>18 Months</span>
        </div>
      </div>

      {/* Monthly Installment Section */}
      <div className="installment-container">
        <p>Estimated Monthly Installments</p>
        <h2>Rp 150.000</h2>
        <p className="installment-note">
          Installment fees may change according to the results of the
          verification of the physical condition of the vehicle at the branch
          office.
        </p>
      </div>

      {/* Apply Button */}
      <button className="apply-button">APPLY LOAN</button>
    </div>
  );
}

export default App;