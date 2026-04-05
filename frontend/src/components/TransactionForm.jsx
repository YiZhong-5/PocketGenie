function TransactionForm() {
    return (
      <section className="form-section">
        <h2>Add New Transaction</h2>
  
        <form className="transaction-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="e.g. Coffee" />
          </div>
  
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" placeholder="e.g. 6.50" />
          </div>
  
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input type="text" id="category" placeholder="e.g. Food" />
          </div>
  
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select id="type">
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
  
          <button type="submit" className="submit-btn">
            Add Transaction
          </button>
        </form>
      </section>
    );
  }
  
  export default TransactionForm;