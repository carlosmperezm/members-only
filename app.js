import "dotenv/config";
import path from "node:path";
import express from "express";
import appRouter from "./routes/index.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", appRouter);

app.listen(PORT);



