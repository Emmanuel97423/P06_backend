const Sauce = require("../models/Sauce");

exports.like = (req, res, next) => {
  //Lorsque qu'un utilisateur like
  if (req.body.like == 1) {
    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { usersLiked: req.body.userId } },
      { new: true },
      function (err, doc) {
        if (err) {
          throw err;
        } else {
          console.log("Liké!");
        }
      }
    );
    //Incrémentation du compteur de likes
    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { likes: +1 } },

      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );

    console.log("J'aime");
    return res.status(200).json({ message: "Sauce liké!" });
    //Lorsque qu'un utilisateur ne like ni ne dislike
  } else if (req.body.like == 0) {
    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { usersLiked: req.body.userId } },
      { new: true },
      function (err, doc) {
        if (err) {
          throw err;
        } else {
          console.log("Sans avis");
        }
      }
    );
    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { likes: -1 } },
      { new: true },
      function (err, doc) {
        if (err) {
          throw err;
        } else {
          console.log("updated!");
        }
      }
    );
    console.log("Aucun avis");
    return res.status(200).json({ message: "Aucun avis" });
    //Lorsque qu'un utilisateur dislike
  } else if (req.body.like == -1) {
    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { usersDisliked: req.body.userId } },
      { new: true },
      function (err, doc) {
        if (err) {
          throw err;
        } else {
          console.log("Disliké");
        }
      }
    );
    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { dislikes: +1 } },
      { new: true },
      function (err, doc) {
        if (err) {
          throw err;
        } else {
          console.log(doc);
        }
      }
    );
    console.log("je n'aime pas");
    return res.status(200).json({ message: "Sauce disliké" });
  }
};
