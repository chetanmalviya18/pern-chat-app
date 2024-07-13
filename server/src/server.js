import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import { app, server } from "./socket/socket.js";
// import cors from "cors";

const __dirname = path.resolve();

// app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
