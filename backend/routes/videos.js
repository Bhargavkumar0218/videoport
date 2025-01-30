const express = require("express");
const { getFavorites, addToFavorites, removeFromFavorites } = require("../controllers/videoController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/favorites", verifyToken, getFavorites);
router.post("/favorites", verifyToken, addToFavorites);
router.delete("/favorites/:id", verifyToken, removeFromFavorites);

module.exports = router;
