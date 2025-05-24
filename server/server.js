import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkwebhooks from "./controllers/clerkWebhooks.js";

connectDB();

const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Middleware
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to Clerk webhooks
app.use("app/clerk", clerkwebhooks);

app.get("/", (req, res) => res.send("API is working "));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(` Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down... ");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
