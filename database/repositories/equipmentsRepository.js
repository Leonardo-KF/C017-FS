import { equipmentDb } from "../mongo/schemas/equipment.js";
export class EquipmentsRepository {
  async create(equipment) {
    return await equipmentDb.create(equipment);
  }
}
