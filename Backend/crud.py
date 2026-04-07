from typing import Optional, List
from sqlmodel import SQLModel, Field, Session, select
from database import engine


class Transaction(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    amount: float
    category: str
    type: str


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def create_transaction(session: Session, transaction: Transaction):
    session.add(transaction)
    session.commit()
    session.refresh(transaction)
    return transaction


def get_transactions(session: Session) -> List[Transaction]:
    statement = select(Transaction)
    results = session.exec(statement)
    return results.all()


def delete_transaction(session: Session, transaction_id: int):
    transaction = session.get(Transaction, transaction_id)
    if transaction:
        session.delete(transaction)
        session.commit()
    return transaction


def update_transaction(session: Session, transaction_id: int, updated_data: Transaction):
    transaction = session.get(Transaction, transaction_id)
    if transaction:
        transaction.title = updated_data.title
        transaction.amount = updated_data.amount
        transaction.category = updated_data.category
        transaction.type = updated_data.type
        session.add(transaction)
        session.commit()
        session.refresh(transaction)
    return transaction