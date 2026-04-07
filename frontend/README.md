PocketGenie – A Full-Stack Expense Tracking Web Application

## Introduction
PocketGenie is designed to help users track their daily income and expenses in a simple and intuitive way. Many people struggle with managing personal finances due to scattered records or lack of clarity in spending patterns. This application provides a centralized platform where users can easily record, view, update, and manage their transactions, improving financial awareness and decision-making.

## Technical Stack Illustration
Frontend (React + Vite)
        ↓ (Fetch API)
Backend (FastAPI)
        ↓ (SQLModel ORM)
Database (MySQL)

Frontend: React (Vite)
Styling: CSS (custom styling via App.css)
Routing: Single-page structure (no routing required for MVP)
Backend: FastAPI (Python)
Database: MySQL (managed via MySQL Workbench)
API Communication: Fetch API (RESTful endpoints)
Deployment: Not deployed (local development environment)

## Feature List
Add new transactions (income and expenses)
Edit existing transactions
Delete transactions
Real-time data synchronization with backend
Dynamic calculation of total income and expenses
Conditional rendering of edit form
Basic form validation (empty input prevention)
Clean and modular component-based UI

## Folder Structure
PocketGenie/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── TransactionForm.jsx
│   │   │   ├── EditTransactionForm.jsx
│   │   │   ├── TransactionList.jsx
│   │   │   ├── TransactionItem.jsx
│   │   │   └── SummaryCards.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   │
│   └── └── App.css
│
├── backend/
│   ├── main.py
│   ├── crud.py
│   ├── database.py
│   └── .venv/

## Challenges & Solutions
One major challenge was integrating the frontend with the backend API while handling asynchronous data updates. Initially, newly added transactions would not persist after page refresh due to issues in request handling and state updates. This was resolved by ensuring proper API calls and re-fetching data after each CRUD operation.
Another challenge involved handling CORS errors caused by mismatched frontend and backend ports, which prevented API communication. This was fixed by configuring FastAPI middleware to allow cross-origin requests.
Additionally, separating concerns between frontend state management and backend data persistence required restructuring components and introducing a clear API layer (api.js). This improved maintainability and clarity of data flow across the application.