const crypto = require("node:crypto");

class AnimeEntity {
  constructor(anime) {
    this.id = anime.id ?? crypto.randomUUID();
    this.title = anime.title;
    this.protagonist = anime.protagonist;
    this.gender = anime.gender;
    this.year = anime.year;
  }

  validate() {
    if (!this.title) {
      throw new Error("Titulo precisa ser informado");
    }
    if (!this.gender) {
      throw new Error("Genero precisa ser informado");
    }
    if (!this.year || this.year < 1960) {
      throw new Error("Ano informado não é valido");
    }
    if (!this.protagonist) {
      throw new Error("Protagonista precisa ser informado");
    }
  }

  getAnime() {
    return {
      id: this.id,
      title: this.title,
      gender: this.gender,
      year: this.year,
      protagonist: this.protagonist,
    };
  }
}

module.exports = AnimeEntity;
