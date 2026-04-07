import { useState, useEffect } from "react";
import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";
import EditTransactionForm from "../components/EditTransactionForm";
import SummaryCards from "../components/SummaryCards";
import TransactionList from "../components/TransactionList";
import {
  getTransactions,
  addTransactionApi,
  deleteTransactionApi,
  updateTransactionApi,
} from "../services/api";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
      console.log("Fetched transactions:", data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const addTransaction = async (newTransaction) => {
    try {
      await addTransactionApi(newTransaction);
      await fetchTransactions();
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await deleteTransactionApi(id);
      await fetchTransactions();
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const startEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
  };

  const updateTransaction = async (updatedTransaction) => {
    try {
      await updateTransactionApi(updatedTransaction.id, updatedTransaction);
      await fetchTransactions();
      setEditingTransaction(null);
    } catch (error) {
      console.error("Error updating transaction:", error);
    }
  };

  const cancelEdit = () => {
    setEditingTransaction(null);
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

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          startEditTransaction={startEditTransaction}
        />

        <EditTransactionForm
          editingTransaction={editingTransaction}
          updateTransaction={updateTransaction}
          cancelEdit={cancelEdit}
        />
      </main>
    </div>
  );
}

export default Dashboard;