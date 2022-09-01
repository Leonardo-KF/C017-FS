import { Sequelize } from "sequelize";

export class ConnectSqlite {
  connect() {
    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "./database.sqlite",
    });
    return sequelize;
  }
}
