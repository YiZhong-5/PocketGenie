function SummaryCards({ transactions }) {
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
  
    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
  
    return (
      <section className="summary-section">
        <div className="summary-card">
          <h3>Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
  
        <div className="summary-card">
          <h3>Total Expense</h3>
          <p>${totalExpense.toFixed(2)}</p>
        </div>
      </section>
    );
  }
  
  export default SummaryCards;