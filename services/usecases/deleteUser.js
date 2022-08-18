export class DeleteUserUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }
  async execute(userId) {
    const deletedUser = await this.repository.deleteUser(userId);
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return deletedUser;
  }
}
