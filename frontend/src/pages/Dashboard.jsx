import { useState } from "react";
import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";
import SummaryCards from "../components/SummaryCards";
import TransactionList from "../components/TransactionList";

function Dashboard() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Coffee", category: "Food", amount: 6.5, type: "expense" },
    { id: 2, title: "Salary", category: "Income", amount: 1200, type: "income" },
    { id: 3, title: "Uber", category: "Transport", amount: 18.2, type: "expense" },
  ]);

  
  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="dashboard">
      <Header />

      <main className="dashboard-content">
        <section className="placeholder-section">
          <h2>Welcome to PocketGenie</h2>
          <p>Add your transactions below to keep track of your income and expenses.</p>
          <p>Stay organized and understand your spending at a glance.</p>
        </section>

        <TransactionForm addTransaction={addTransaction} />
        <SummaryCards transactions={transactions} />
        <TransactionList transactions={transactions} />
      </main>
    </div>
  );
}

export default Dashboard;