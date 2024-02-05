const express = require("express");
const mongoose = require("mongoose");

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

// ----- Middleware ----- //
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true })); // parse form content
app.use(express.json());

// ----- Routes ----- //

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.use("/messages", messagesRouter);

// ----- Error Handling ----- //

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// ----- Start Server ----- //
main()
  .then(app.listen(PORT, () => console.log(`App running on ${PORT}`)))
  .catch((err) => console.log(err));
