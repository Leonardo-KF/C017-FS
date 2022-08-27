export class EquipmentsController {
  constructor(createEquipmentsUseCase) {
    this.createEquipmentsUseCase = createEquipmentsUseCase;
  }

  async create(req, res) {
    try {
      const equipments = req.body;

      const response = await this.createEquipmentsUseCase.execute(equipments);
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  }
}
