import { Controller } from "./controller.js";

export class CharacterController extends Controller {
  constructor(service, findCharacterByName) {
    super(service);
    this.findCharacterByName = findCharacterByName;
  }

  async findCharacterByName(req, res) {
    const name = req.body.name;
    const response = await this.findCharacterByName.execute(name);
    res.status(200).send(response);
  }
}
