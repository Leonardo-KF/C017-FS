export class FindUserByEmailUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async execute(email) {
    const user = await this.repository.findUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
