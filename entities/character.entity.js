const crypto = require("crypto");
class CharacterEntity {
  constructor(character) {
    this.id = crypto.randomUUID();
    this.name = character.name;
    this.lastName = character.lastName;
    this.skill = character.skill;
    this.age = character.age;
    this.gender = character.gender;
  }

  validate() {
    if (!this.name || !this.name.length > 5) {
      throw new Error("Nome precisa ser preenchido");
    }
    if (!this.lastName) {
      this.lastName = "unknown";
    }
    if (!this.skill) {
      throw new Error("A habilidade precisa ser preenchido");
    }
    if (!this.age) {
      throw new Error("A idade precisa ser informada");
    }
    if (!this.gender) {
      throw new Error("O genero precisa ser preenchido");
    }
  }

  getCharacter() {
    return {
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      skill: this.skill,
      age: this.age,
      gender: this.gender,
    };
  }
}

module.exports = CharacterEntity;
