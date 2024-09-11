import express from "express";
import router from "../routes/index";
const app = express();

app.use(express.json());

app.use("/books", router.bookRouter);

export default app;

