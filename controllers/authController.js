export class AuthController {
  constructor(findUserByEmailUseCase, bcryptHelper, jwtHelper) {
    this.findUserByEmail = findUserByEmailUseCase;
    this.jwtHelper = jwtHelper;
    this.bcryptHelper = bcryptHelper;
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await this.findUserByEmail.execute(email);

      const passwordIsValid = this.bcryptHelper.comparePasword(
        password,
        user.password
      );

      if (!passwordIsValid) {
        throw new Error("Invalid password try again");
      }

      const tokenData = {
        id: user.id,
        email: user.email,
        image: user.image,
      };

      const token = this.jwtHelper.generateToken(tokenData);

      res.status(200).send({
        accessToken: token,
      });
    } catch (e) {
      console.log(e);
      res.status(401).send(e.message);
    }
  }
}
