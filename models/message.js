const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: { type: String, require: true, maxLength: 250 },
  author: { type: String, required: true, maxLength: 50 },
  date_posted: { type: Date, required: true },
});

module.exports = mongoose.model("Message", MessageSchema);
