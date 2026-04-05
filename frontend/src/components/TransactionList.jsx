import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  return (
    <section className="transaction-list">
      <h2>Transactions</h2>

      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          title={transaction.title}
          category={transaction.category}
          amount={transaction.amount}
          type={transaction.type}
        />
      ))}
    </section>
  );
}

export default TransactionList;