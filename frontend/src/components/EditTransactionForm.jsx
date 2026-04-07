import { useState, useEffect } from "react";

function EditTransactionForm({
  editingTransaction,
  updateTransaction,
  cancelEdit,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  useEffect(() => {
    if (editingTransaction) {
      setTitle(editingTransaction.title);
      setAmount(editingTransaction.amount);
      setCategory(editingTransaction.category);
      setType(editingTransaction.type);
    }
  }, [editingTransaction]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !amount || !category) {
      return;
    }

    const updatedTransaction = {
      id: editingTransaction.id,
      title: title,
      amount: Number(amount),
      category: category,
      type: type,
    };

    updateTransaction(updatedTransaction);
  };

  if (!editingTransaction) {
    return null;
  }

  return (
    <section className="form-section">
      <h2>Edit Transaction</h2>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="edit-title">Title</label>
          <input
            type="text"
            id="edit-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="edit-amount">Amount</label>
          <input
            type="number"
            id="edit-amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="edit-category">Category</label>
          <input
            type="text"
            id="edit-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="edit-type">Type</label>
          <select
            id="edit-type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div className="edit-actions">
          <button type="submit" className="submit-btn">
            Update Transaction
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditTransactionForm;