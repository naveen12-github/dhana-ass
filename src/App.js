import React, { useState } from 'react';
import './index.css'; // CSS file for styling

function Loan() {
  const [loanAmount, setLoanAmount] = useState(14500000); // Default loan amount
  const [loanPeriod, setLoanPeriod] = useState(12); // Default loan period
  const [monthlyInstallment, setMonthlyInstallment] = useState(0); // State to store the calculated installment

  // Calculate monthly installment (EMI)
  const calculateInstallment = () => {
    const interestRate = 0.05; // Assuming 5% annual interest rate for this example
    const monthlyRate = interestRate / 12; // Monthly interest rate
    const months = loanPeriod; // Loan period in months

    // EMI Formula (simplified)
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    setMonthlyInstallment(emi.toFixed(0)); // Set the calculated EMI
  };

  const handleApplyLoan = () => {
    console.log(`Loan Amount: Rp ${loanAmount.toLocaleString()}`);
    console.log(`Loan Period: ${loanPeriod} Months`);
    console.log(`Monthly Installment: Rp ${monthlyInstallment}`);
  };

  // Update the loan amount and recalculate installment
  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
    calculateInstallment();
  };

  // Update the loan period and recalculate installment
  const handleLoanPeriodChange = (e) => {
    setLoanPeriod(e.target.value);
    calculateInstallment();
  };

  // Initial calculation when the component mounts
  React.useEffect(() => {
    calculateInstallment();
  }, [loanAmount, loanPeriod]);

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
          onChange={handleLoanAmountChange}
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
          onChange={handleLoanPeriodChange}
        />
        <div className="slider-values">
          <span>6 Months</span>
          <span>18 Months</span>
        </div>
      </div>

      {/* Monthly Installment Section */}
      <div className="installment-container">
        <p>Estimated Monthly Installments</p>
        <h2>Rp {monthlyInstallment}</h2>
        <p className="installment-note">
          Installment fees may change according to the results of the
          verification of the physical condition of the vehicle at the branch
          office.
        </p>
      </div>

      {/* Apply Button */}
      <button className="apply-button" onClick={handleApplyLoan}>
        APPLY LOAN
      </button>
    </div>
  );
}

export default Loan;
