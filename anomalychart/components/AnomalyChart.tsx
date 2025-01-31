import { useEffect, useState } from "react";
import axios from "axios";

export default function AnomalyChart() {
  const [anomalies, setAnomalies] = useState([]);

  useEffect(() => {
    axios.get("/api/anomaly").then(response => setAnomalies(response.data));
  }, []);

  return (
    <div>
      <h2>Detected Anomalies</h2>
      <ul>
        {anomalies.map((anomaly, index) => (
          <li key={index}>{anomaly.transactionId} - {anomaly.amount} SOL</li>
        ))}
      </ul>
    </div>
  );
}
