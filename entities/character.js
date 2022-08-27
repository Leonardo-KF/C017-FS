export class CharacterEntity {
  constructor(character, userId) {
    this.id = character.id ?? randomUUID();
    this.name = character.name;
    this.image = character.image;
    this.userId = userId;
  }

  validate() {
    if (!this.name || !this.image) {
      throw new Error("Invalid character");
    }
  }

  getCharacter() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      userId: this.userId,
    };
  }
}
