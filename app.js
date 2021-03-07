const express = require("express");
const mongoose = require("mongoose");
const sauceRoute = require("./routes/sauce");
const likeRoute = require("./routes/liked");
const userRoute = require("./routes/user");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

//requête vers mongodb
mongoose
  .connect(
    "mongodb+srv://epok:dropknee97460@cluster0.wfwkj.mongodb.net/SoPekocko_DataBase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Connexion à MongoDB échouée !: " + error));

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
app.use(bodyParser.json());
//Route vers le stockage des images
app.use("/images", express.static(path.join(__dirname, "images")));
//route utilisateur
app.use("/api/auth", userRoute);
//Routes sauces
app.use("/api/sauces", sauceRoute);
//Routes de likes
app.use("/api/sauces", likeRoute);

module.exports = app;
