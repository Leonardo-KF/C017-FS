export class FindUserByIdUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }
  async execute(userId) {
    if (!userId) {
      throw new Error("User id sended is invalid");
    }

    // 0.5 flavio alvarenga achou o bug

    const userFinded = await this.repository.findById(userId);
    if (!userFinded) {
      throw new Error("Not found a user with Userid:" + userId);
    }
    return userFinded;
  }
}
