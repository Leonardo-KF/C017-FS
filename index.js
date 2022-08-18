import { UserRepositoryMongoDb } from "./database/repositories/userRepository.js";
import { CreateUserUseCase } from "./services/usecases/createUser.js";

const repository = new UserRepositoryMongoDb();
const createUserUseCase = new CreateUserUseCase(repository);

const newUser = await createUserUseCase.execute({
  name: "Leo",
  email: "bestmail@mail.com",
  password: "senhasegura",
  image: "http://imagem.com",
});

console.log(newUser);
