import express from "express";
import logger from "morgan";
import cors from "cors";
import "dotenv/config";
import eventsRouter from "./routes/eventsRouter.js";
import participantsRouter from "./routes/participantsRouter.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/events", eventsRouter);
app.use("/api/participants", participantsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
