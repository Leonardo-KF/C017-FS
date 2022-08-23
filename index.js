import { CharacterRepositoryMongoDb } from "./database/repositories/characterRepository.js";
import { UserRepositoryMongoDb } from "./database/repositories/userRepository.js";
import { MongoDbConnection } from "./database/mongo/connection/connect.js";
import { CreateUserUseCase } from "./services/usecases/user/createUser.js";
import { UpdateUserUseCase } from "./services/usecases/user/updateUser.js";
import { DeleteUserUseCase } from "./services/usecases/user/deleteUser.js";
import { FindAllUsersUseCase } from "./services/usecases/user/findAllUsers.js";
import { FindUserByIdUseCase } from "./services/usecases/user/findUserById.js";
import { Services } from "./services/service.js";
import { Controller } from "./controllers/controller.js";

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const userRepository = new UserRepositoryMongoDb();
const characterRepository = new CharacterRepositoryMongoDb();

const createUserUseCase = new CreateUserUseCase(userRepository);
const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(
  userRepository,
  findUserByIdUseCase
);
const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);

const userService = new Services(
  createUserUseCase,
  updateUserUseCase,
  findAllUsersUseCase,
  findUserByIdUseCase,
  deleteUserUseCase
);
const userController = new Controller(userService);

const response = await userController.create({
  body: {
    name: "Leonardo",
    email: "leonardo@gmail.com",
    password: "Umasenhasegura",
    image: "http://fotolinda.com.br",
  },
});

console.log(response);
