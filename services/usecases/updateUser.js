import { UserEntity } from "../../entities/user.js";
export class UpdateUserUseCase {
  constructor(userRepository, findUserById) {
    this.repository = userRepository;
    this.findUserById = findUserById;
  }
  async execute(userUpdated, userId) {
    // encontra e retorna o user por id, se não encontrar retorna undefined
    const userToUpdate = await this.findUserById.execute(userId);
    // se userToUpdate for undefined dispara um erro pois não encontrou o user
    if (!userToUpdate) {
      throw new Error("Not found a user with Userid:" + userId);
    }
    // pega os valores antigos do usuário encontrado e substitui pelos valores novos que recebemos como parâmetro
    const userModified = { ...userToUpdate, userUpdated };
    // usa a entidade para pegar as informações do usuário para poder valida-lo
    const userValidated = new UserEntity(userModified);
    // se as novas propriedades não forem válidas a entidade irá disparar um erro
    userValidated.validate();
    // vai passar os dados do usuário que virão da entidade para o repository
    return await this.repository.updateUser(userValidated.getUser());
  }
}
