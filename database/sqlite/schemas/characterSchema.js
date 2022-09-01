import { DataTypes } from "sequelize";
import { ConnectSqlite } from "../connect.js";

const Db = new ConnectSqlite();

const characterDb = Db.connect().define("characters", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.STRING, allowNull: false },
});

characterDb.sync();

export default characterDb;
