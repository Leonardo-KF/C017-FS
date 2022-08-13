const animesService = require("../services/animes.service");

async function findAllAnimes(req, res) {
  try {
    const allAnimes = await animesService.findAllAnimes();
    res.status(200).send(allAnimes);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function findAnimeById(req, res) {
  const id = req.params.id;
  const uniqueAnime = await animesService.findAnimeById(id);
  if (uniqueAnime) {
    res.status(200).send(uniqueAnime);
  } else {
    res.status(400).send({ message: "Não existe nenhum anime com esse id" });
  }
}

async function createAnime(req, res) {
  try {
    const anime = req.body;
    const animeCreated = await animesService.createAnime(anime);
    res.status(201).send(animeCreated);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.message });
  }
}

async function updateAnime(req, res) {
  try {
    const anime = req.body;
    const animeUpdated = await animesService.updateAnime(anime);
    res.status(200).send(animeUpdated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

async function deleteAnime(req, res) {
  const id = req.params.id;
  const deletedAnime = await animesService.deleteAnime(id);
  if (deletedAnime) {
    res.status(200).send(deletedAnime);
  } else {
    res
      .status(400)
      .send({ message: "Nenhum anime com esse id foi encontrado" });
  }
}

module.exports = {
  findAllAnimes,
  findAnimeById,
  createAnime,
  updateAnime,
  deleteAnime,
};
