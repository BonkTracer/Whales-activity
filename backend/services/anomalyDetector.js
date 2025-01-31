import { getSolanaTransactions } from "./solanaAPI.js";

export const detectAnomalies = async () => {
    const transactions = await getSolanaTransactions();
    return transactions.filter(tx => tx.fee > 0.1); // Example anomaly detection logic
};
