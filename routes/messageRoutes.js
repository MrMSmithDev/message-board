const express = require("express");
const controller = require("../controllers/messageController");

const router = express.Router();
router.use(express.static("public"));

router.get("/", controller.message_index);

router.post("/", controller.message_post);

// router.get("/load_samples", controller.message_load_samples);

router.get("/new", controller.message_new_get);

router.get("/:id", controller.message_details_get);

router.delete("/:id", controller.message_delete);

module.exports = router;
