

# 🌞 Good Morning App (React + FastAPI + PostgreSQL)

A full-stack application where users can submit their **name**, **phone number**, and **email** through a single web form. The frontend is built with **React JS**, the backend with **FastAPI**, and data is stored in **PostgreSQL**.  

---

## 🗂 Project Structure

```

TANMAN-PROJ/
├── backend/
│   ├── venv/                 
│   ├── **pycache**/           
│   ├── database.py           
│   ├── database_setup.sql     
│   ├── main.py                
│   ├── models.py             
│   └── requirements.txt       
└── frontend-react/
├── node_modules/          
├── public/               
└── src/                   

````

---

## ⚡ Features

- Single-page web form to submit **name**, **phone**, **email**
- **React frontend** for smooth user experience
- **FastAPI backend** for handling API requests
- **PostgreSQL database** to store user submissions
- Swagger UI available at `http://127.0.0.1:8000/docs` for API testing
- Frontend shows **"Data saved successfully"** on submission
- Full-stack flow: Frontend → Backend → Database

---

## 🛠 Setup Instructions

### Backend

1. Open terminal → `cd backend`  
2. Create virtual environment:  
   ```powershell
   python -m venv venv
````

3. Activate venv:

   ```powershell
   venv\Scripts\activate
   ```
4. Install dependencies:

   ```powershell
   pip install -r requirements.txt
   ```
5. Start server:

   ```powershell
   uvicorn main:app --reload
   ```
6. Test backend via Swagger UI: `http://127.0.0.1:8000/docs`

### Frontend

1. Open terminal → `cd frontend-react`
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start development server:

   ```bash
   npm start
   ```
4. Open browser: `http://localhost:3000` and submit the form

### Database

* PostgreSQL database: `goodmorning_db`
* Table: `users` (columns: `id`, `name`, `phone`, `email`)
* Verify entries in **pgAdmin**

---

## ✅ How it Works

1. User enters **name, phone, email** in React form
2. Form submits data to FastAPI endpoint `/submit`
3. FastAPI stores data in PostgreSQL `users` table
4. Frontend shows **"Data saved successfully"**
5. Data visible in pgAdmin under `goodmorning_db → users`

---

## 📂 GitHub Repository

All code is available at: [https://github.com/ManasaNeeli11/Tann-mann-project](https://github.com/ManasaNeeli11/Tann-mann-project)
