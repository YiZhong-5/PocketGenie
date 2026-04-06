import { useState } from "react";
import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";
import EditTransactionForm from "../components/EditTransactionForm";
import SummaryCards from "../components/SummaryCards";
import TransactionList from "../components/TransactionList";

function Dashboard() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Coffee", category: "Food", amount: 6.5, type: "expense" },
    { id: 2, title: "Salary", category: "Income", amount: 1200, type: "income" },
  ]);

  const [editingTransaction, setEditingTransaction] = useState(null);

  // ➕ Add
  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  // ❌ Delete
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // ✏️ 开始编辑
  const startEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
  };

  // ✅ 更新
  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((t) =>
        t.id === updatedTransaction.id ? updatedTransaction : t
      )
    );
    setEditingTransaction(null);
  };

  // 🚫 取消编辑
  const cancelEdit = () => {
    setEditingTransaction(null);
  };

  return (
    <div className="dashboard">
      <Header />

      <main className="dashboard-content">
        <TransactionForm addTransaction={addTransaction} />

        <SummaryCards transactions={transactions} />

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          startEditTransaction={startEditTransaction}
        />

        {/* ⭐ 编辑表单单独存在 */}
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