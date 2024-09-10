import "reflect-metadata";
import app from "./config/express";

const PORT = 8000;

app.listen(PORT, () => console.log(`The server is on the port ${PORT}`));
