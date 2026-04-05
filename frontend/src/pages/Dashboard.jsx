import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />

      <main className="dashboard-content">
        <section className="placeholder-section">
          <h2>Welcome to PocketGenie</h2>
          <p>Add your transactions below to keep track of your income and expenses.  </p>
          <p>Stay organized and understand your spending at a glance.</p>
        </section>

        <TransactionForm />
      </main>
    </div>
  );
}

export default Dashboard;