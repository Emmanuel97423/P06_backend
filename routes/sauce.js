const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const sauceCtrl = require("../controllers/sauce");

//requête POST sauce
router.post("/", auth, multer, sauceCtrl.createSauce);
//requête GET toutes les sauces
router.get("/", auth, sauceCtrl.getAllSauce);
//requête GET sauce unique
router.get("/:id", auth, sauceCtrl.getOneSauce);
//Mise à jour PUT sauce
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
//suppression DEL sauce
router.delete("/:id", auth, sauceCtrl.deleteSauce);

module.exports = router;
