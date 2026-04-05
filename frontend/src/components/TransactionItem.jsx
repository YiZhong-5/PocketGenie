function TransactionItem({ title, category, amount, type }) {
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
        </div>
      </div>
    );
  }
  
  export default TransactionItem;