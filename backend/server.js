import express from "express";
import cors from "cors";
import anomalyRoutes from "./routes/anomalyRoutes.js";
import whaleRoutes from "./routes/whaleRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/anomaly", anomalyRoutes);
app.use("/api/whale", whaleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
