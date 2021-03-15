const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
  id: { type: mongoose.Schema.ObjectId },
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  usersDisliked: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Sauce", sauceSchema);
