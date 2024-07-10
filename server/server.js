import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
