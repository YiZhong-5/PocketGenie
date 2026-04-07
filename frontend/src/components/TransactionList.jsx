import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, deleteTransaction, startEditTransaction }) {

  return (
    <section className="transaction-list">
      <h2>Transactions</h2>

      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          id={transaction.id}
          title={transaction.title}
          category={transaction.category}
          amount={transaction.amount}
          type={transaction.type}
          deleteTransaction={deleteTransaction}
          startEditTransaction={startEditTransaction}
          transaction={transaction}
        />
      ))}
    </section>
  );
}

export default TransactionList;