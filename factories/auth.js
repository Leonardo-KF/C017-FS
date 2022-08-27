import { AuthRoutes } from "../routes/authRoutes.js";
import { AuthController } from "../controllers/authController.js";
import { FindUserByEmailUseCase } from "../services/usecases/user/findUserByEmail.js";
import { UserRepositoryMongoDb } from "../database/repositories/userRepository.js";
import { BcryptHelper } from "../auth/bcrypt.js";
import { JwtHelper } from "../auth/jwt.js";

export function makeAuthFactory(router) {
  const userRepository = new UserRepositoryMongoDb();
  const bcryptHelper = new BcryptHelper();
  const jwtHelper = new JwtHelper();

  const findUserByEmail = new FindUserByEmailUseCase(userRepository);
  const authController = new AuthController(
    findUserByEmail,
    bcryptHelper,
    jwtHelper
  );

  const authRoutes = new AuthRoutes(authController, router);

  return authRoutes;
}
