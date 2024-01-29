const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

// ----- DB connection ----- //
mongoose.set("strictQuery", false);
const mongoDB = `mongodb+srv://admin:${process.env.DbPW}@messageboard.9sxrucw.mongodb.net/`;

async function main() {
  mongoose.connect(mongoDB);
}

main().catch((err) => console.log(err));

// ----- Middleware ----- //
