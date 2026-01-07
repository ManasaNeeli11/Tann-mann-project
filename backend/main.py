from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
from models import Base, User

app = FastAPI()

# CREATE TABLES automatically
Base.metadata.create_all(bind=engine)

# CORS so React can call FastAPI
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency for database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Schema
class UserCreate(BaseModel):
    name: str
    phone: str
    email: str

# API endpoint
@app.post("/submit")
def submit_data(user: UserCreate, db: Session = Depends(get_db)):
    new_user = User(name=user.name, phone=user.phone, email=user.email)
    db.add(new_user)
    db.commit()      # <--- MUST HAVE THIS
    db.refresh(new_user)
    return {"message": "Data saved successfully"}
