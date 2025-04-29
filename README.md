# Bonk Tracer - Solana Whale & Anomaly Tracker

Bonk Tracer is an advanced monitoring system designed to track whale activity and detect transaction anomalies in the Solana blockchain. It leverages AI models to analyze patterns and provide real-time insights into blockchain transactions.

---

## Features

✅ **Real-time Solana Transaction Monitoring**
✅ **Whale Detection** (Identifies large transactions over 50,000 SOL)
✅ **AI-powered Anomaly Detection** (Flags suspicious transactions)
✅ **Interactive Dashboard** (Next.js frontend)
✅ **Fast API Response** (Node.js & Express backend)
✅ **Database Integration** (SQLite for storing transaction history)

---

## Folder Structure

```
bonk-tracer/
│── backend/        # Express.js API Server
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── server.js
│   ├── package.json
│
│── frontend/       # Next.js (React + TypeScript)
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── public/
│   ├── next.config.js
│   ├── package.json
│
│── ai-models/      # Machine Learning Models
│   ├── anomaly_detection.ipynb
│   ├── whale_activity_analysis.ipynb
│
│── database/       # SQLite Database
│   ├── db.sqlite
│   ├── schema.sql
│
│── README.md
│── .gitignore
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/BonkTracer/bonk-tracer.git
cd bonk-tracer
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
node server.js
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

### 4️⃣ Train AI Model
```sh
cd ai-models
python anomaly_detection.py
```

---

## API Endpoints

| Endpoint            | Method | Description                      |
|---------------------|--------|----------------------------------|
| `/api/anomaly`      | GET    | Get detected anomalies          |
| `/api/whale`       | GET    | Get whale transactions          |
| `/api/transactions` | GET    | Fetch latest Solana transactions |

---

## Technologies Used

**Frontend:** Next.js (React + TypeScript)  
**Backend:** Node.js (Express.js)  
**Database:** SQLite  
**AI Models:** Python (Scikit-learn, TensorFlow)  
**API:** Solana Blockchain Scanner  

---

## How It Works

**Solana API Fetching** - Retrieves real-time transaction data.  
**Whale Detection** - Filters large transactions over 50,000 SOL.  
**Anomaly Detection** - Uses AI to identify unusual transaction patterns.  
**Frontend Dashboard** - Displays insights with charts and lists.  

---

## Usage Guide

**Start the backend server:**  
```sh
node server.js
```

**Start the frontend:**  
```sh
npm run dev
```

**Access the dashboard:**  
🔗 Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Bonk Tracer - Your Solana Monitoring Solution!
