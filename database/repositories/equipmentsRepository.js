export class EquipmentsRepository {
  constructor() {
    this.equipments = [];
  }

  async create(equipments) {
    await this.equipments.push(equipments);
    return equipments;
  }
}
