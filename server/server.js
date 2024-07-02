import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
