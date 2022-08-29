import { Equipments } from "../../../entities/equipments.js";

export class CreateEquipmentUseCase {
  constructor(equipmentsRepository) {
    this.repository = equipmentsRepository;
  }

  async execute(set) {
    const newEquipments = new Equipments(set);
    newEquipments.validate();
    return await this.repository.create(newEquipments.getEquipment());
  }
}
