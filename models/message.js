const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true, maxLength: 500 },
  author: { type: String, required: true, maxLength: 50 },
  avatar_svg: { type: String, required: true },
  date_posted: { type: Date, required: true },
});

module.exports = mongoose.model("Message", MessageSchema);
