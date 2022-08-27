import { userDb } from "../mongo/schemas/user.js";
export class UserRepositoryMongoDb {
  async create(user) {
    return await userDb.create(user);
  }
  async deleteUser(id) {
    return await userDb.findOneAndDelete(id);
  }
  async updateUser(user) {
    return await userDb.findOneAndUpdate({ id: user.id }, user, { new: true });
  }
  async findById(id) {
    return await userDb.findOne({ id: id });
  }
  async findAll() {
    return await userDb.find();
  }
  async findUserByEmail(email) {
    return await userDb.findOne({ email: email });
  }
}
