import { CharacterEntity } from "../../../entities/character.js";

export class CreateCharacterUseCase {
  constructor(characterRepository, findUserById) {
    this.repository = characterRepository;
    this.findUserById = findUserById;
  }

  async execute(character) {
    const userId = character.userId;
    await this.findUserById.execute(userId);
    const newCharacter = new CharacterEntity(character, userId);
    newCharacter.validate();
    return await this.repository.create(newCharacter.getCharacter());
  }
}
