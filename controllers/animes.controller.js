const animesService = require("../services/animes.service");

function findAllAnimes(req, res) {
  try {
    const allAnimes = animesService.findAllAnimes();
    res.status(200).send(allAnimes);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

function findAnimeById(req, res) {
  const id = req.params.id;
  const uniqueAnime = animesService.findAnimeById(id);
  if (uniqueAnime) {
    res.status(200).send(uniqueAnime);
  } else {
    res.status(400).send({ message: "Não existe nenhum anime com esse id" });
  }
}

function createAnime(req, res) {
  try {
    const anime = req.body;
    const animeCreated = animesService.createAnime(anime);
    res.status(201).send(animeCreated);
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.message });
  }
}

function updateAnime(req, res) {
  try {
    const anime = req.body;
    const animeUpdated = animesService.updateAnime(anime);
    res.status(200).send(animeUpdated);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

function deleteAnime(req, res) {
  const id = req.params.id;
  const deletedAnime = animesService.deleteAnime(id);
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
