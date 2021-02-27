const express = require("express");

const app = express();

app.use("/api/sauces", (req, res, next) => {
  const sauces = [
    {
      _id: "oeihfzeoi",
      userId: "qsomihvqios",
      name: "Sauce au poivre",
      manufacturter: "Amora",
      description: "Les infos de mon premier objet",
      mainPepper: "principal ingrédient dans la sauce",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      heat: 5,
      likes: 50,
      dislikes: 5,
      usersLiked: ["string"],
      usersDisliked: ["string"],
    },
  ];
  res.status(200).json(sauces);
});
module.exports = app;
