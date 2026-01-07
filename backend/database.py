from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "postgresql://postgres:manu_123@localhost:5432/goodmorning_db"

engine = create_engine(DATABASE_URL, echo=True)   # echo=True shows SQL logs
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
