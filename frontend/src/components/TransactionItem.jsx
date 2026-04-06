function TransactionItem({
  id,
  title,
  category,
  amount,
  type,
  deleteTransaction,
  startEditTransaction,
  transaction,
}) {
  return (
    <div className="transaction-item">
      <div className="transaction-left">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>

      <div className="transaction-right">
        <span className={type === "expense" ? "expense" : "income"}>
          {type === "expense" ? "- " : "+ "}${amount}
        </span>

        <button
          className="edit-btn"
          onClick={() => startEditTransaction(transaction)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTransaction(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;