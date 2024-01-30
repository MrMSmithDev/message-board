const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const compileSass = require("express-compile-sass");

const messagesRouter = require("./routes/messageRoutes");

const PORT = process.env.PORT || 3000;

const app = express();
app.set("view engine", "ejs");

// ----- DB connection ----- //
mongoose.set("strictQuery", false);
const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@messageboard.9sxrucw.mongodb.net/`;

async function main() {
  mongoose.connect(mongoDB);
}

main().catch((err) => console.log(err));

// ----- Middleware ----- //

app.use(
  compileSass({
    root: path.join(__dirname, "public"),
    sourceMap: true,
    sourceComments: true,
    watchFiles: true,
    logToConsole: false,
  }),
);
app.use(express.static("public"));

// ----- Routes ----- //

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use("/messages", messagesRouter);

// ----- Error Handling ----- //

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

app.listen(PORT, () => console.log(`App running on ${PORT}`));
