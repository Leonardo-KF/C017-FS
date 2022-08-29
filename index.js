import express, { Router } from "express";
import cors from "cors";

import { MongoDbConnection } from "./database/mongo/connection/connect.js";
import { makeUserFactory } from "./factories/user.js";
import { makeCharacterFactory } from "./factories/character.js";
import { makeAuthFactory } from "./factories/auth.js";
import { makeEquipmentsFactory } from "./factories/equipment.js";

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const app = express();
const router = Router();

const user = makeUserFactory(router);
const character = makeCharacterFactory(router);
const auth = makeAuthFactory(router);
const equipments = makeEquipmentsFactory(router);

app.use(express.json());
app.use(cors());
app.use("/characters", character.route());
app.use("/users", user.route());
app.use("/auth", auth.route());
app.use("/equipments", equipments.route());

app.listen(3000, () => {
  console.log("Servidor rodando em: http://localhost:3000");
});
