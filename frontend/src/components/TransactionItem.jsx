function TransactionItem() {
    return (
      <div className="transaction-item">
        <div className="transaction-left">
          <h4>Coffee</h4>
          <p>Food</p>
        </div>
  
        <div className="transaction-right">
          <span className="expense">- $6.50</span>
        </div>
      </div>
    );
  }
  
  export default TransactionItem;