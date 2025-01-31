CREATE TABLE transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    transaction_id TEXT NOT NULL,
    amount REAL,
    fee REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
