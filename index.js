import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import cors from "cors";

//config
dotenv.config();
const app = express();

//port
const PORT = process.env.PORT;

// DATABASE CONNECT
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("mongodb is connected");

//middlewares

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
//HOME page for app

app.get("/", function (request, response) {
  response.send("<h1>welcome to url shortner</h1>");
});

app.listen(PORT, () => console.log(`the server started in :${PORT}`));
