import TransactionItem from "./TransactionItem";

function TransactionList() {
  return (
    <section className="transaction-list">
      <h2>Transactions</h2>

      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
    </section>
  );
}

export default TransactionList;