const express = require("express");
const cors = require("cors");

const app = express();

const controller = require("./controllers/animes.controller");

app.use(cors());
app.use(express.json());

app.get("/", controller.findAllAnimes);
app.get("/anime/:id", controller.findAnimeById);
app.post("/anime", controller.createAnime);
app.put("/anime", controller.updateAnime);
app.delete("/anime/:id", controller.deleteAnime);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
