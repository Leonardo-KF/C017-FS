export class FindAllCharacterUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute() {
    return await this.repository.findAll();
  }
}
