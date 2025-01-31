import { getSolanaTransactions } from "./solanaAPI.js";

export const detectWhaleActivity = async () => {
    const transactions = await getSolanaTransactions();
    return transactions.filter(tx => tx.amount > 50000); // Whale detection threshold
};
