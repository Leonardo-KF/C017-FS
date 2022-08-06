const animesService = require("../services/animes.service");

function findAllAnimes(req, res) {
  const allAnimes = animesService.findAllAnimes();
  res.send(allAnimes);
}

function findAnimeById(req, res) {
  const id = req.params.id;
  const uniqueAnime = animesService.findAnimeById(id);
  res.send(uniqueAnime);
}

function createAnime(req, res) {
  const anime = req.body;
  const animeCreated = animesService.createAnime(anime);
  res.send(animeCreated);
}

function updateAnime(req, res) {
  const anime = req.body;
  const animeUpdated = animesService.updateAnime(anime);
  res.send(animeUpdated);
}

function deleteAnime(req, res) {
  const id = req.params.id;
  const deletedAnime = animesService.deleteAnime(id);
  res.send(deletedAnime);
}

module.exports = {
  findAllAnimes,
  findAnimeById,
  createAnime,
  updateAnime,
  deleteAnime,
};
