const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: { type: String, require: true, maxLength: 250 },
  author: { type: String, required: true, maxLength: 50 },
  avatar_svg: { type: String, required: true },
  date_posted: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Message", MessageSchema);
