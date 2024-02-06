/* eslint-disable camelcase */
const path = require("path");
// const diceBear = require("@dicebear/core").default;
// const avatarCollection = require("@dicebear/thumbs").default;
const Message = require("../models/message");
const sampleMessages = require("../samples/messageSamples");

// const { createAvatar } = diceBear;

function message_index(req, res) {
  Message.find()
    .sort({ date_posted: -1 })
    .limit(10)
    .then((result) => {
      const messages = [...result];
      res.render(path.join("messages", "index"), {
        title: "Messages",
        messages,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).render("404", { title: "Could not retrieve messages" });
    });
}

function message_details_get(req, res) {
  const { id } = req.params;

  Message.findById(id)
    .then((result) => {
      res.render(path.join("messages", "details"), {
        title: `Message ${id}`,
        message: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render("404", { title: "Message Not Found" });
    });
}

function message_new_get(req, res) {
  res.render(path.join("messages", "new"), { title: "New Message" });
}

function message_post(req, res) {
  // const avatar = createAvatar(avatarCollection, { seed: req.author });
  // const avatarSvg = avatar.toString();

  const { author, message } = req.body;

  console.log(author, message);

  res.send("posted");
}

function message_load_samples(req, res) {
  Message.insertMany(sampleMessages).catch((err) => console.log(err));
  res.redirect("/");
}

function message_delete(req, res) {
  const { id } = req.params;
  Message.deleteById(id).then(
    res.redirect("/").catch((err) => {
      console.log(err);
      res.redirect(`/messages/${id}`);
    }),
  );
}

module.exports = {
  message_index,
  message_details_get,
  message_new_get,
  message_post,
  message_delete,
  message_load_samples,
};
