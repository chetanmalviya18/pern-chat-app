import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import { app, server } from "./socket/socket.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(cookieParser());
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
