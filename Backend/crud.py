from sqlmodel import Field, SQLModel, Session, create_engine, select

username = "root"
password = "root"
database_name = "pocketgenie"
DATABASE_URL = f"mysql+pymysql://{username}:{password}@localhost:3307/{database_name}"
engine = create_engine(DATABASE_URL, echo=True)