import { useEffect, useState } from "react";
import AnomalyChart from "../components/AnomalyChart";
import WhaleTracker from "../components/WhaleTracker";

export default function Dashboard() {
  return (
    <div>
      <h1>Solana Transaction Monitoring</h1>
      <AnomalyChart />
      <WhaleTracker />
    </div>
  );
}
