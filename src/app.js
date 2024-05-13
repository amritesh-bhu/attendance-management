import cookieParser from "cookie-parser";
import express from "express";
import { urlencoded } from "express";
import cors from "cors";
import { HTTP_PORT, MONGO_URI } from "./lib/env.js";
import { dbConn } from "./lib/db-connection.js";

const app = express();

dbConn(MONGO_URI);

// console.log("hello");
app.use(express.json());
app.use(cookieParser);
app.use(urlencoded({ extended: false }));
app.use(
  cors({
    origin: /http:\/\/(localhost|127.0.0.1):*/,
    Credentials: true,
  })
);

app.listen(HTTP_PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is listening at port ${HTTP_PORT}`);
});
