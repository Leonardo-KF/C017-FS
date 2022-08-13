const router = require("express").Router();
const validParams = require("../middlewares/validParams");
const controller = require("../controllers/animes.controller");

router.get("/", controller.findAllAnimes);
router.get("/:id", validParams, controller.findAnimeById);
router.post("/", controller.createAnime);
router.put("/", controller.updateAnime);
router.delete("/:id", validParams, controller.deleteAnime);

module.exports = router;
