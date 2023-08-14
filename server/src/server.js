import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions";

import connectDB from "./connection/connect";
import mongoose from "mongoose";

const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Hi",
  });
});

app.use("/api", require("./routes/root"));

app.all("*", (_req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
