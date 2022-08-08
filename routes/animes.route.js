const router = require("express").Router();

const controller = require("../controllers/animes.controller");

router.get("/", controller.findAllAnimes);
router.get("/:id", controller.findAnimeById);
router.post("/", controller.createAnime);
router.put("/", controller.updateAnime);
router.delete("/:id", controller.deleteAnime);

module.exports = router;
