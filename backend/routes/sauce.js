const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
// const checkSauceInput = require("../middleware/check-sauce-input")

const {
  getAllSauces,
  getOneSauce,
  createSauce,
  updateSauce,
  deleteSauce,
  likeDislikeSauce,
} = require("../controllers/sauce");

router.get("/", auth, getAllSauces);
router.get("/:id", auth, getOneSauce);
router.post("/", auth, multer, createSauce);
router.put("/:id", auth, multer, updateSauce);
router.delete("/:id", auth, deleteSauce);
router.post("/:id/like", auth, likeDislikeSauce);

module.exports = router;
