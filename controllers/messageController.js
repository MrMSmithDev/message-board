/* eslint-disable camelcase */
const path = require("path");
const generateAvatar = require("generate-avatar");
const Message = require("../models/message");
const sampleMessages = require("../samples/messageSamples");

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
  res.render(path.join("messages", "new"), {
    title: "New Message",
    author: "",
    message: "",
  });
}

function message_post(req, res) {
  const { author, message } = req.body;

  const avatarSvg = generateAvatar.generateFromString(author);

  const newMessage = new Message({
    author,
    message,
    avatar_svg: avatarSvg,
  });

  console.log(author, message);

  newMessage
    .save()
    .then((result) => res.redirect(`/messages/${result._id}`))
    .catch((err) => {
      console.log(err);
      res.render("/messages/new", { title: "New Message", author, message });
    });
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
