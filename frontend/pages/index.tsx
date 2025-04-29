import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Bonk Trcaer - Solana Whale & Anomaly Tracker</h1>
      <Link href="/dashboard">
        <button>Go to Dashboard</button>
    </div>
  );
}
