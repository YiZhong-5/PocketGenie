import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !amount || !category) {
      return;
    }

    const newTransaction = {
      title: title,
      amount: Number(amount),
      category: category,
      type: type,
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setCategory("");
    setType("expense");
  };

  return (
    <section className="form-section">
      <h2>Add New Transaction</h2>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="e.g. Coffee"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="e.g. 6.50"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            placeholder="e.g. Food"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
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