import { UserRepositoryMongoDb } from "./database/repositories/userRepository.js";
import { CreateUserUseCase } from "./services/usecases/user/createUser.js";
import { MongoDbConnection } from "./database/mongo/connection/connect.js";
import { FindUserByIdUseCase } from "./services/usecases/user/findUserById.js";
import { UpdateUserUseCase } from "./services/usecases/user/updateUser.js";

const database = new MongoDbConnection();

await database.ConnectDb().catch((err) => {
  console.log(err);
});

const repository = new UserRepositoryMongoDb();
// const createUserUseCase = new CreateUserUseCase(repository);

// const newUser = await createUserUseCase.execute({
//   name: "Leo",
//   email: "bestmail@mail.com",
//   password: "senhasegura",
//   image: "http://imagem.com",
// });

// console.log(newUser);

const findByIdUseCase = new FindUserByIdUseCase(repository);
const updateUserUseCase = new UpdateUserUseCase(repository, findByIdUseCase);

const userUpdated = await updateUserUseCase.execute(
  {
    name: "Leonardo",
    email: "seumelhoremail@hotmail.com",
  },
  "dbefef59-a9c7-40e5-9c9d-2b6710059ddd"
);

console.log(userUpdated);
