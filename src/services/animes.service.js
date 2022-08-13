const animes = require("../../mocks/animes");
const Anime = require("../database/models/animeSchema");
const AnimeEntity = require("../entities/anime.entity");
const CharacterEntity = require("../entities/character.entity");

async function findAllAnimes() {
  return await Anime.find();
}

async function findAnimeById(id) {
  const animeFinded = await Anime.findOne({ id: id });
  return animeFinded;
}

async function createAnime(anime) {
  const newAnime = new AnimeEntity(anime);
  newAnime.validate();

  if (!anime.characters) {
    throw new Error("Personagens precisam ser informados");
  }

  const newCharacters = [];

  anime.characters.map((character) => {
    const newCharacter = new CharacterEntity(character);
    newCharacter.validate();
    newCharacters.push(newCharacter.getCharacter());
  });

  const newAnimeValidated = {
    ...newAnime.getAnime(),
    characters: newCharacters,
  };

  const animeCreated = await Anime.create(newAnimeValidated);

  return animeCreated;
}

async function updateAnime(anime) {
  const updateAnime = new AnimeEntity(anime);
  updateAnime.validate();

  if (!anime.characters) {
    throw new Error("Personagens precisam ser informados");
  }

  const updatedCharacters = [];

  anime.characters.map((character) => {
    const updatedCharacter = new CharacterEntity(character);
    updatedCharacter.validate();
    updatedCharacters.push(updatedCharacter.getCharacter());
  });

  const updatedAnime = {
    ...updateAnime.getAnime(),
    characters: updatedCharacters,
  };

  const animeUpdatedInDatabase = await Anime.findOneAndUpdate(
    { id: anime.id },
    updatedAnime,
    { new: true }
  );

  return animeUpdatedInDatabase;
}

async function deleteAnime(id) {
  const animeFinded = await Anime.findOneAndDelete({ id: id });

  return animeFinded;
}

module.exports = {
  findAllAnimes,
  findAnimeById,
  createAnime,
  updateAnime,
  deleteAnime,
};
