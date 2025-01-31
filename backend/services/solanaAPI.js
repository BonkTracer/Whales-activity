import axios from "axios";

const SOLANA_API_URL = "https://api.solscan.io/transaction/latest";

export const getSolanaTransactions = async () => {
    try {
        const response = await axios.get(SOLANA_API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching Solana transactions:", error);
        return null;
    }
};
