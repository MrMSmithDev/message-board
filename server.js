const express = require("express");
const mongoose = require("mongoose");

const compression = require("compression");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const messagesRouter = require("./routes/messageRoutes");

const isProd = process.env.NODE_ENV === "production" || "development";
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

if (isProd === "production") {
  app.use(compression());
  app.use(helmet());

  const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 20,
  });

  app.use(limiter);
} else {
  console.log("Not Prod");
}

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
