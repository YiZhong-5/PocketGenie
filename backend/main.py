from typing import List
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session

from database import get_session
from crud import (
    Transaction,
    create_db_and_tables,
    create_transaction,
    get_transactions,
    delete_transaction,
    update_transaction,
)

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5174",
    "http://localhost:5175",
    "http://127.0.0.1:5175",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


@app.get("/")
def read_root():
    return {"message": "PocketGenie backend running 🚀"}


@app.get("/transactions", response_model=List[Transaction])
def read_transactions(session: Session = Depends(get_session)):
    return get_transactions(session)


@app.post("/transactions", response_model=Transaction)
def add_transaction(transaction: Transaction, session: Session = Depends(get_session)):
    return create_transaction(session, transaction)


@app.delete("/transactions/{transaction_id}")
def remove_transaction(transaction_id: int, session: Session = Depends(get_session)):
    transaction = delete_transaction(session, transaction_id)
    if not transaction:
        raise HTTPException(status_code=404, detail="Transaction not found")
    return {"message": "Transaction deleted successfully"}


@app.put("/transactions/{transaction_id}", response_model=Transaction)
def edit_transaction(
    transaction_id: int,
    updated_data: Transaction,
    session: Session = Depends(get_session),
):
    transaction = update_transaction(session, transaction_id, updated_data)
    if not transaction:
        raise HTTPException(status_code=404, detail="Transaction not found")
    return transaction