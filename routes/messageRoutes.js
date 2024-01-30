const express = require("express");
const controller = require("../controllers/messageController");

const router = express.Router();
router.use(express.static("public"));

router.get("/", controller.messages_index);

router.post("/", controller.message_post);

router.get("/new", controller.message_new_get);

router.get("/:id", controller.message_details_get);

router.delete("/:id", controller.message_delete);

module.exports = router;
