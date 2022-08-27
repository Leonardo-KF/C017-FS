import { randomUUID } from "node:crypto";

export class Equipments {
  constructor(set) {
    this.id = set.id ?? randomUUID();
    this.name = set.name;
    this.armor = set.armor;
    this.weapon = set.weapon;
    this.shield = set.shield;
    this.skill = set.skill;
  }

  validate() {
    if (!this.name || !this.skill) {
      throw new Error("Invalid equipments");
    }
  }

  getEquipment() {
    return {
      id: this.id,
      name: this.name,
      armor: this.armor,
      weapon: this.weapon,
      shield: this.shield,
      skill: this.skill,
    };
  }
}
