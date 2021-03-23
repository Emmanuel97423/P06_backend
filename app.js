const express = require("express");
const mongoose = require("mongoose");
const sauceRoute = require("./routes/sauce");
const likeRoute = require("./routes/liked");
const userRoute = require("./routes/user");
const path = require("path");
const helmet = require("helmet");
const session = require("express-session");

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

//En tête http sécurité
app.use(helmet());
//désactivation de l'en-tête X-Powered-By
app.disable("x-powered-by");
//coockie
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "s3Cur3",
    name: "sessionId",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route vers le stockage des images
app.use("/images", express.static(path.join(__dirname, "images")));
//route utilisateur
app.use("/api/auth", userRoute);
//Routes sauces
app.use("/api/sauces", sauceRoute);
//Routes de likes
app.use("/api/sauces", likeRoute);

module.exports = app;
