const router = require("express").Router();
const validParams = require("../middlewares/validParams");
const controller = require("../controllers/animes.controller");

router.get("/", controller.findAllAnimes);
router.get("/:id", validParams, controller.findAnimeById);
router.post("/create", controller.createAnime);
router.put("/update", controller.updateAnime);
router.delete("/delete/:id", validParams, controller.deleteAnime);

module.exports = router;
