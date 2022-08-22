import { CharacterEntity } from "../../../entities/character.js";
export class UpdateCharacterUseCase {
  constructor(characterRepository, findCharacterById) {
    this.repository = characterRepository;
    this.findCharacterById = findCharacterById;
  }

  async execute(characterUpdated, characterId) {
    // usando o useCase de findCharacterById para aproveitar as validações e pegar o character que será atualizado
    const findedCharacter = await this.findCharacterById.execute(characterId);
    // usamos o object assign pegar os dados ja salvos no banco e atualizar somente os que recebemos como parametro
    const updatedCharacter = Object.assign(findedCharacter, characterUpdated);
    // instanciamos nossa entidade passando o objeto atualizado como parametro para podermos utilizar os métodos da mesma
    const validatedCharacter = new CharacterEntity(updatedCharacter);
    // utilizamos o método validate para garantir que não foi passado nenhum parametro invalido
    validatedCharacter.validate();
    // dando tudo certo até aqui, basta salvarmos no banco o objeto que vem do método getCharacter da instancia.
    return await this.repository.update(validatedCharacter.getCharacter());
  }
}
