const express = require("express");
const mongoose = require("mongoose");

const app = express();

//requête vers mongodb
mongoose
  .connect(
    "mongodb+srv://epok:dropknee97460@cluster0.74z7y.mongodb.net/SoPeckocko?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//Requête CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

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
