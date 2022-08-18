import { randomUUID } from "node:crypto";
import { CharacterEntity } from "./character.js";

export class UserEntity {
  constructor(user) {
    this.id = user.id ?? randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
    this.characters = user.characters ?? [];
  }

  validate() {
    if (!this.email || !this.password || !this.name || !this.image) {
      throw new Error("Invalid user");
    }
  }

  addCharacter(character) {
    const newCharacter = new CharacterEntity(character, this.id);
    this.characters.push(newCharacter.getCharacter());
  }

  getUser() {
    const user = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      image: this.image,
      characters: this.characters,
    };

    return user;
  }
}
