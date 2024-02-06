const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: { type: String, require: true, maxLength: 250 },
  author: { type: String, required: true, maxLength: 50 },
  date_posted: { type: Date, required: true },
});

MessageSchema.pre("save", (next) => {
  if (!this.date_posted) {
    this.date_posted = new Date();
  }
  next();
});

module.exports = mongoose.model("Message", MessageSchema);
