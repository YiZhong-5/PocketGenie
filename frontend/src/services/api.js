const BASE_URL = "http://127.0.0.1:8000";

export async function getTransactions() {
  const response = await fetch(`${BASE_URL}/transactions`);
  const data = await response.json();
  return data;
}

export async function addTransactionApi(newTransaction) {
  const response = await fetch(`${BASE_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTransaction),
  });

  const data = await response.json();
  return data;
}

export async function deleteTransactionApi(id) {
  const response = await fetch(`${BASE_URL}/transactions/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
}

export async function updateTransactionApi(id, updatedTransaction) {
  const response = await fetch(`${BASE_URL}/transactions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTransaction),
  });

  const data = await response.json();
  return data;
}