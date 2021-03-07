const express = require("express");
const router = express.Router();

const likeCtrl = require("../controllers/liked");

router.post("/:id/like", likeCtrl.like);

module.exports = router;
