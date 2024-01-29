const express = require("express");
const mongoose = require("mongoose");

const path = require("path");

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

app.use(express.static(path.join(__dirname, "public")));

// ----- Routes ----- //

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// ----- Error Handling ----- //

app.use((req, res) => {
  res.statusCode(404).render("404", { title: "404" });
});

app.listen(3000);
