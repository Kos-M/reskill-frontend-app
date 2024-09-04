const express = require("express");
const router = express.Router();

const { fetchPosts, getSingle } = require("../controllers");
const { validatePostID } = require("../middlewares");

router.get("/posts", fetchPosts);
router.get("/post/:id?", validatePostID, getSingle);

module.exports = router;
