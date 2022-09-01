import characterDb from "../sqlite/schemas/characterSchema.js";

export class CharacterRepositorySqlite {
  async create(character) {
    return await characterDb.create(character);
  }

  async update(character) {
    const updatedCharacter = await characterDb.update(character, {
      where: { id: character.id },
    });
    console.log(updatedCharacter);
    return character;
  }

  async find(characterId) {
    return await characterDb.findOne({ where: { id: characterId } });
  }

  async findByName(characterName) {
    return await characterDb.findAll({ name: characterName });
  }

  async findAll() {
    return await characterDb.findAll();
  }
}
